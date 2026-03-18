import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData =[
  {
    "id": "std-001",
    "name": "Rahim",
    "math": 85,
    "physics": 78,
    "english": 82,
    "total": 245,
    "grade": "A"
  },
  {
    "id": "std-002",
    "name": "Karim",
    "math": 65,
    "physics": 70,
    "english": 68,
    "total": 203,
    "grade": "B"
  },
  {
    "id": "std-003",
    "name": "Ayesha",
    "math": 92,
    "physics": 88,
    "english": 90,
    "total": 270,
    "grade": "A+"
  },
  {
    "id": "std-004",
    "name": "Fatema",
    "math": 74,
    "physics": 69,
    "english": 72,
    "total": 215,
    "grade": "B"
  },
  {
    "id": "std-005",
    "name": "Hasan",
    "math": 55,
    "physics": 60,
    "english": 58,
    "total": 173,
    "grade": "C"
  },
  {
    "id": "std-006",
    "name": "Nusrat",
    "math": 88,
    "physics": 91,
    "english": 86,
    "total": 265,
    "grade": "A+"
  },
  {
    "id": "std-007",
    "name": "Sabbir",
    "math": 72,
    "physics": 75,
    "english": 70,
    "total": 217,
    "grade": "B"
  },
  {
    "id": "std-008",
    "name": "Mim",
    "math": 95,
    "physics": 93,
    "english": 94,
    "total": 282,
    "grade": "A+"
  },
  {
    "id": "std-009",
    "name": "Arif",
    "math": 60,
    "physics": 58,
    "english": 62,
    "total": 180,
    "grade": "C"
  },
  {
    "id": "std-010",
    "name": "Jannat",
    "math": 80,
    "physics": 84,
    "english": 79,
    "total": 243,
    "grade": "A"
  }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" ></Line>
                <Line dataKey={'physics'} stroke='red'></Line>
            </LineChart>

        </div>
    );
};

export default ResultChart;