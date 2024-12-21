import "./Page.css";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Page() {
  const date = new Date();
  let TheDay = date.getDate();
  let TheMonth = date.getMonth() + 1;
  let TheYear = date.getFullYear();
  let TheHours = date.getHours() ;
  let TheMunites = date.getMinutes();

  const [country, setCountry] = useState("Cairo");
  const [city, setCity] = useState();
  const [day, setday] = useState();
  const [date1, setDate] = useState();
  const [time, setTime] = useState();
  const [timezone, setTimezone] = useState();

  const [Fajr, setFajr] = useState();
  const [Sunrise, setSunrise] = useState();
  const [Dhuhr, setDhuhr] = useState();
  const [Asr, setAsr] = useState();
  const [Maghrib, setMaghrib] = useState();
  const [Isha, setIsha] = useState();

  useEffect(() => {
    setDate(`${TheDay}-${TheMonth}-${TheYear}`);
  }, [TheDay, TheMonth, TheYear]);

  useEffect(() => {
    const paddedHours = String(TheHours).padStart(2, "0");
    const paddedMinutes = String(TheMunites).padStart(2, "0");

    setTime(`${paddedHours}:${paddedMinutes}`);
  }, [TheHours, TheMunites]);

  useEffect(() => {
    axios
      .get(
        `https://api.aladhan.com/v1/timingsByCity/${
          (TheDay, TheMonth, TheYear)
        }?city=${city}&country=${country}`
      )
      .then(function (response) {
        console.log(response.data);
        setday(response.data.data.date.hijri.weekday.en);
        setTimezone(response.data.data.meta.timezone);
        setFajr(response.data.data.timings.Fajr);
        setSunrise(response.data.data.timings.Sunrise);
        setDhuhr(response.data.data.timings.Dhuhr);
        setAsr(response.data.data.timings.Asr);
        setMaghrib(response.data.data.timings.Maghrib);
        setIsha(response.data.data.timings.Isha);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [country]);

  function HandleCLick(event) {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);

    if (selectedCountry === "Algeria") {
      setCity("Algiers");
    } else if (selectedCountry === "Bahrain") {
      setCity("Manama");
    } else if (selectedCountry === "Djibouti") {
      setCity("Djibouti City");
    } else if (selectedCountry === "Egypt") {
      setCity("Cairo");
    } else if (selectedCountry === "Iraq") {
      setCity("Baghdad");
    } else if (selectedCountry === "Jordan") {
      setCity("Amman");
    } else if (selectedCountry === "Kuwait") {
      setCity("Kuwait City");
    } else if (selectedCountry === "Lebanon") {
      setCity("Beirut");
    } else if (selectedCountry === "Libya") {
      setCity("Tripoli");
    } else if (selectedCountry === "Mauritania") {
      setCity("Nouakchott");
    } else if (selectedCountry === "Morocco") {
      setCity("Rabat");
    } else if (selectedCountry === "Oman") {
      setCity("Muscat");
    } else if (selectedCountry === "Palestine") {
      setCity("Ramallah");
    } else if (selectedCountry === "Qatar") {
      setCity("Doha");
    } else if (selectedCountry === "Saudi Arabia") {
      setCity("Riyadh");
    } else if (selectedCountry === "Somalia") {
      setCity("Mogadishu");
    } else if (selectedCountry === "Sudan") {
      setCity("Khartoum");
    } else if (selectedCountry === "Syria") {
      setCity("Damascus");
    } else if (selectedCountry === "Tunisia") {
      setCity("Tunis");
    } else if (selectedCountry === "United Arab Emirates") {
      setCity("Abu Dhabi");
    } else if (selectedCountry === "Yemen") {
      setCity("Sana'a");
    }
  }

  return (
    <>
      <div className="header">
        <h1 className="Cairo">{country}</h1>
        <h2 className="Date1">{day}</h2>
        <h2 className="Date">{date1}</h2>
        <h1 className="Time">{time}</h1>
        <h2 className="LastOne1">Timezone</h2>
        <h2 className="LastOne">{timezone}</h2>
        <hr className="hr" />
      </div>

      <div className="Cards">
        <Card name="Fajr" date={Fajr} />
        <Card name="Sunrise" date={Sunrise} />
        <Card name="Duhr" date={Dhuhr} />
        <Card name="Asr" date={Asr} />
        <Card name="Maghrib" date={Maghrib} />
        <Card name="Isha" date={Isha} />
      </div>

      <div className="select">
        <label>Contries :</label>
        <select id="country" name="country" onClick={HandleCLick}>
          <option value="Algeria">Algeria</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Egypt">Egypt</option>
          <option value="Iraq">Iraq</option>
          <option value="Jordan">Jordan</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Libya">Libya</option>
          <option value="Mauritania">Mauritania</option>
          <option value="Morocco">Morocco</option>
          <option value="Oman">Oman</option>
          <option value="Palestine">Palestine</option>
          <option value="Qatar">Qatar</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Somalia">Somalia</option>
          <option value="Sudan">Sudan</option>
          <option value="Syria">Syria</option>
          <option value="Tunisia">Tunisia</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="Yemen">Yemen</option>
        </select>
      </div>
    </>
  );
}
