import express from "express";
const app = express();
import cors from "cors";
import { data } from "./data.js";
app.use(cors(corsOptions));

var corsOptions = {
  origin: "http://localhost:3000/",
  optionsSuccessStatus: 200,
};
app.get("/first", (req, res) => {
	res.json(data.filter(item => {
		if(Number(item.income.substring(1)) < 5 && (item.car === "BMW" || item.car === "Mercedes-Benz")){
			return true;
		}
		return false;
		
	}))
});
app.get("/second", (req, res) => {
	res.json(data.filter(item => {
		if(Number(item.phone_price) > 10000 && item.gender === "Male"){
			return true;
		}
		return false;
		
	}))
});
app.get("/third", (req, res) => {
	res.json(data.filter(item => {
		if(item.last_name[0] === "M" && item.quote.length > 15 && item.email.includes(item.last_name.toLowerCase())){
			return true;
		}
		return false;
		
	}))
});
app.get("/fourth", (req, res) => {
	res.json(data.filter(item => {
		const {car, email} = item;
		if((car==="BMW" || car==="Mercedes" || car==="Audi") && !(/[0-9]/.test(item.email))){
			return true;
		}
		return false;
		
	}))
});
app.listen(4000);
