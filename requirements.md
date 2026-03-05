# Netra-Vaidya – Requirements Document

## 1. Problem Statement
Early detection of preventable eye and skin diseases in Tier-3 and rural India where specialist access is limited.

## 2. Objective
Build an AI-powered mobile screening system that enables ASHA workers to detect cataracts and fungal infections using smartphone cameras.

## 3. Target Users
- ASHA Workers
- Doctors
- District Health Officers
- Administrators

## 4. Functional Requirements

### On-Device Features
- Capture eye/skin image
- Image analysis using MobileNetV3 (TensorFlow Lite)
- Symptom-based questionnaire
- Risk score generation
- Referral recommendation
- Offline-first operation

### Cloud Features
- Secure API integration
- Store encrypted case data
- Store encrypted images (Amazon S3)
- Real-time analytics dashboard
- Model retraining via SageMaker

## 5. Non-Functional Requirements
- Works in low-connectivity areas
- Data encryption at rest and in transit
- Role-based access control
- Scalable architecture
- Fast on-device inference (<3 seconds)

## 6. Success Metrics
- Reduced screening time
- Early detection rate improvement
- Reduced unnecessary hospital visits
- District-level reporting accuracy
