# LBLFIBEBL - Nanofabrication, Laser Lithography & Ion Beam Physics Simulation Platform

LBLFIBEBL is a premier nanofabrication and optical physics software platform specializing in Laser Beam Lithography (LBL), Focused Ion Beam (FIB) milling, Electron Beam Lithography (EBL), and quantum optical layout simulation.

## Tech Stack
- **Frontend**: React 18, Vite 5, Tailwind CSS, Lucide Icons, HTML5 Canvas 2D Physics Engine.
- **Backend**: Python 3.12, Django 5 REST Framework, WhiteNoise, Gunicorn.
- **Databases**: Dual sync architecture (SQLite + MongoDB Atlas Cloud).
- **Payments**: Stripe API PaymentIntent checkout integration.

## Key Features
- **Raith.com UI Clone**: Precision-crafted header, footer, and sub-pages matching raith.com design standards with full mobile responsiveness.
- **2D Interactive Physics & Lithography Simulator**: Real-time Gaussian beam propagation, EBL spot sizing, focal refractions, and optical ray tracing.
- **Executive Admin Console**: Database-backed analytics, user plan manager, and technical specification requests secured by `X-Admin-Passcode`.
- **Global Toast Notification System**: Displays Django backend REST messages directly in the React UI.

## Getting Started

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

License: Proprietary - LBLFIBEBL GmbH 2026.
