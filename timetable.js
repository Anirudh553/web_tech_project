import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const TimeTable = () => {
  const subjects = ['DDCO', 'AFLL', 'WT', 'MCSE', 'DSA'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const periodTimes = [
    ['8:00 - 8:45', '8:45 - 9:30'],     // First double period
    ['9:30 - 10:15', '10:15 - 11:00'],  // Second double period
    ['11:00 - 11:45', '11:45 - 12:30'], // Third double period
    ['1:30 - 2:15', '2:15 - 3:00']      // Fourth double period
  ];

  const generateInitialTimetable = () => {
    return days.map(() => {
      const daySchedule = [];
      const availableSubjects = [...subjects];
      
      // Generate 4 slots (for double periods)
      for (let i = 0; i < 4; i++) {
        if (availableSubjects.length === 0) {
          availableSubjects.push(...subjects);
        }
        const randomIndex = Math.floor(Math.random() * availableSubjects.length);
        const subject = availableSubjects.splice(randomIndex, 1)[0];
        daySchedule.push(subject);
      }
      
      return daySchedule;
    });
  };

  const [timetable] = useState(generateInitialTimetable());

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-gray-800">Weekly Timetable</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-3 bg-gray-100 border text-left">Time / Day</th>
                {days.map(day => (
                  <th key={day} className="p-3 bg-gray-100 border text-center font-semibold">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {periodTimes.map((periodPair, periodIndex) => (
                <tr key={periodIndex}>
                  <td className="p-3 border bg-gray-50">
                    <div className="text-sm">{periodPair[0]}</div>
                    <div className="text-sm mt-1">{periodPair[1]}</div>
                  </td>
                  {days.map((_, dayIndex) => (
                    <td
                      key={`${dayIndex}-${periodIndex}`}
                      className="p-3 border text-center bg-black text-white hover:bg-gray-800 transition-colors"
                      rowSpan="1"
                    >
                      {timetable[dayIndex]?.[periodIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Note: Each subject has two consecutive 45-minute periods
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeTable;
