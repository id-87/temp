from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from datetime import datetime
from enum import Enum
from typing import List, Optional

app = FastAPI(title="ODIN API", description="AI Mission Control for Earth-Moon Travel")


class ThreatType(str, Enum):
    SOLAR_FLARE = "SOLAR_FLARE"
    DEBRIS_FIELD = "DEBRIS_FIELD"

class Threat(BaseModel):
    type: ThreatType
    severity: str
    message: str

class Trajectory(BaseModel):
    name: str
    eta_hours: int
    radiation: int  
    fuel_cost: int  

class MissionState(BaseModel):
    fuel: int
    trajectory: Trajectory
    log: List[str]


current_state = MissionState(
    fuel=1000,
    trajectory=Trajectory(name="Nominal", eta_hours=72, radiation=50, fuel_cost=0),
    log=["System initialized. Ready for mission start."]
)

threat_database = {
    "2017-09-10": Threat(
        type=ThreatType.SOLAR_FLARE,
        severity="X8.2",
        message="Extreme UV Radiation Alert"
    ),
    "2015-06-22": Threat(
        type=ThreatType.DEBRIS_FIELD,
        severity="HIGH",
        message="High probability of collision with debris cloud"
    )
}


@app.get("/state", response_model=MissionState)
async def get_mission_state():
    """Get the current mission state (frontend polls this)"""
    return current_state

@app.post("/simulate/{date}")
async def start_simulation(date: str):
    """Start a new mission simulation on a given historical date"""
    try:
       
        datetime.strptime(date, "%Y-%m-%d")
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid date format. Use YYYY-MM-DD.")

   
    current_state.fuel = 1000
    current_state.trajectory = Trajectory(name="Nominal", eta_hours=72, radiation=50, fuel_cost=0)
    current_state.log = [f"Mission started on {date}."]

    
    if date in threat_database:
        threat = threat_database[date]
        current_state.log.append(f"ALERT: {threat.message}")
        new_trajectory = handle_threat(threat)
        current_state.trajectory = new_trajectory
        current_state.fuel -= new_trajectory.fuel_cost
        current_state.log.append(f"Executed evasive maneuver: {new_trajectory.name}")
        current_state.log.append(f"Trade-off: +{new_trajectory.eta_hours - 72}h, -{100 - (new_trajectory.radiation/50)*100:.0f}% radiation.")

    return {"message": f"Simulation started for {date}", "log": current_state.log}


def handle_threat(threat: Threat) -> Trajectory:
    """Simple rule-based decision maker. Our 'AI Co-Pilot'."""
    options = [
        Trajectory(name="Wait Orbit", eta_hours=80, radiation=10, fuel_cost=50),
        Trajectory(name="High Diversion", eta_hours=75, radiation=5, fuel_cost=150),
        Trajectory(name="Fast Abort", eta_hours=70, radiation=60, fuel_cost=200)
    ]

    if threat.type == ThreatType.SOLAR_FLARE:
       
        choice = min(options, key=lambda x: x.radiation)
    elif threat.type == ThreatType.DEBRIS_FIELD:
        
        choice = min(options, key=lambda x: x.eta_hours)
    
    return choice