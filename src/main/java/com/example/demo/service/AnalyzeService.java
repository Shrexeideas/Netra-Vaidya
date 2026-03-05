package com.example.demo.service;

import org.springframework.stereotype.Service;
import java.io.File;

@Service
public class AnalyzeService {

    public String process(String imagePath, String pain, String blurry) {

        if (imagePath == null || imagePath.isEmpty()) {
            return "Image path missing";
        }

        File imageFile = new File(imagePath);

        if (!imageFile.exists()) {
            return "Image not found";
        }

        System.out.println("Analyzing: " + imageFile.getAbsolutePath());
        System.out.println("Pain: " + pain);
        System.out.println("Blurry: " + blurry);

        return "Cataract";
    }
}