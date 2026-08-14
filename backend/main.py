from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Initialize the FastAPI app instance that Vercel expects
app = FastAPI(title="Commercial Analytics Backend")

# Enable CORS for seamless frontend-to-backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health_check():
    return {
        "status": "Live Pipeline Active",
        "confidence": 0.952
    }

@app.get("/api/analytics")
def get_analytics():
    # Integrate your intelligence pipeline results here
    return {
        "metrics": {
            "ebitda_breakdown": [35, 28, 20],
            "confidence_threshold": "95.2%"
        },
        "deals": [
            {"target": "Nexus Data Systems", "type": "M&A Acquisition", "valuation": "$78M", "audit_state": "Verified (99%)"},
            {"target": "Aura Health Solutions", "type": "Series C Growth", "valuation": "$34M", "audit_state": "Ambiguous (Resolved)"},
            {"target": "Vanguard Logistics", "type": "Corporate Buyout", "valuation": "$110M", "audit_state": "Audited (95%)"}
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)