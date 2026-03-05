package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.service.AnalyzeService;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.io.File;

@RestController
@CrossOrigin
public class NetraController {

    @Autowired
    AnalyzeService analyzeService;

    // ---------- Upload API ----------
    @PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file) {

        try {

            String uploadDir = System.getProperty("user.dir") + File.separator + "uploads";

            File dir = new File(uploadDir);
            if (!dir.exists()) {
                dir.mkdirs();
            }

            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();

            File destination = new File(dir, fileName);

            file.transferTo(destination);

            HashMap<String,String> response = new HashMap<>();
            response.put("message","File uploaded successfully");
            response.put("imagePath","uploads/" + fileName);

            return ResponseEntity.ok(response);

        } catch (Exception e) {

            e.printStackTrace();
            return ResponseEntity.status(500).body("Upload failed");
        }
    }

    // ---------- Analyze API ----------
    @PostMapping("/analyze")
    public HashMap<String,String> analyze(@RequestBody HashMap<String,String> data)
    {

        String imagePath = data.get("imagePath");
        String pain = data.get("pain");
        String blurry = data.get("blurry");

        String prediction = analyzeService.process(imagePath, pain, blurry);

        HashMap<String,String> result = new HashMap<>();

        result.put("prediction", prediction);
        result.put("confidence", "92%");
        result.put("status", "Analysis Complete");
        result.put("recommendation","Consult an ophthalmologist");
        return result;
    }
}