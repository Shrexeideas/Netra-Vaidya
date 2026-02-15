# Netra-Vaidya – System Design Document

## 1. System Overview

Netra-Vaidya is a multimodal AI system combining on-device computer vision and symptom-based analysis to generate risk scores and referral recommendations.

---

## 2. Architecture Layers

### User Layer
ASHA Worker Mobile Application

### On-Device AI Layer
- Camera Module
- MobileNetV3 (TensorFlow Lite)
- Lightweight Local LLM
- Risk Aggregation Engine

Risk Formula:
Final Risk = (0.7 × Image Confidence) + (0.3 × Symptom Score)

### Decision Layer
- Risk Categorization (Low / Moderate / High)
- Referral Logic Engine

### Cloud Backend (AWS)
- API Gateway
- AWS Lambda
- Amazon S3 (Encrypted Storage)
- Encrypted Database
- CloudWatch Monitoring
- SageMaker (Model Retraining)
- Analytics Dashboard

---

## 3. Data Flow

1. Image captured by ASHA worker
2. On-device AI performs inference
3. Symptom interview conducted
4. Risk score generated
5. Referral recommendation provided
6. Case data synced to AWS backend

---

## 4. Security & Privacy

- Encryption at rest and in transit
- Role-based access control
- Minimal PII storage
- Secure token-based authentication
- Anonymized data for model retraining

---

## 5. Scalability

- District-level deployment ready
- Centralized analytics dashboard
- Continuous model improvement pipeline
