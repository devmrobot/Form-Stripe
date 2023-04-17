import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Radio,
    TextField,
    Slider,
    Select,
    SelectChangeEvent,
    MenuItem,
    stepLabelClasses,
  } from "@mui/material";
import RadioGroup from "./RadioGroup";
import { IInputGroup, IOption } from "../types/InputInterface";
import Image from "next/image";

export const Form = () => {

  const blooms: { label: string; name: string; price: number }[] = [
    {
      label: "Simple",
      name: "Simple",
      price: 60,
    },
    {
      label: "Double",
      name: "Double",
      price: 90,
    },
    {
      label: "Triple",
      name: "Triple",
      price: 120,
    },
  ];

  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    console.log("=========", selectedValue);
  }, [selectedValue]);

  const dateNow = new Date(); // Creating a new date object with the current date and time
  const year = dateNow.getFullYear(); // Getting current year from the created Date object
  const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
  const month = // Setting current Month number from current Date object
    monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 if not to adjust for date input.
      ? `0${monthWithOffset}`
      : monthWithOffset;
  const date =
    dateNow.getUTCDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
      ? `0${dateNow.getUTCDate()}`
      : dateNow.getUTCDate();

  const materialDateInput = `${year}-${month}-${date}`; // combining to format for defaultValue or value attribute of material <TextField>

  const disableWeekends = (date: { getDay: () => number }) => {
    return date.getDay() === 0 || date.getDay() === 6;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cp, setCp] = useState<String>("");

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCp(event.target.value);
  };

  return (
    <div>
      <h2>
        FORM
      </h2>
      <Box component="form">
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={12} sm={4} md={12}>
            {blooms.map(({ label, price }: IOption, index) => (
              <RadioGroup
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                handleChange={handleChange}
                key={index}
                options={blooms}
                value={label}
                label={label}
                index={0}
                price={price}
              />
            ))}
          </Grid>
          {/* <Grid item xs={12} sm={4} md={12}>
                <RadioButtonGroup
                  label="Select your drink:"
                  options={blooms}
                  onChange={radioGroupHandler}
                />
              </Grid> */}
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              style={{ width: "100%" }}
              id="standard-require"
              label="Votre nom"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              style={{ width: "100%" }}
              id="standard-require"
              label="Téléphone"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              style={{ width: "100%" }}
              id="standard-require"
              label="Email"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              style={{ width: "100%" }}
              id="standard-require"
              label="Destinataire"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              style={{ width: "100%" }}
              id="standard-require"
              label="Portable"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              style={{ width: "100%" }}
              id="standard-multiline-static"
              label="Joindre un message"
              multiline
              rows={3}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              select
              style={{ width: "100%" }}
              id="standard-require"
              label="Zone de livraison"
              //value={cp}
              onChange={handleCheck}
              variant="filled"
            >
              <MenuItem value={"Paris I (75001)"}>Paris I (75001)</MenuItem>
              <MenuItem value={"Paris II (75002)"}>Paris II (75002)</MenuItem>
              <MenuItem value={"Paris III (75003)"}>Paris III (75003)</MenuItem>
              <MenuItem value={"Paris IV (75004)"}>Paris IV (75004)</MenuItem>
              <MenuItem value={"Paris V (75005)"}>Paris V (75005)</MenuItem>
              <MenuItem value={"Paris V (75005)"}>Paris V (75005)</MenuItem>
              <MenuItem value={"Paris VII (75007)"}>Paris VII (75007)</MenuItem>
              <MenuItem value={"Paris VIII (75008)"}>
                Paris VIII (75008)
              </MenuItem>
              <MenuItem value={"Paris IX (75009)"}>Paris IX (75009)</MenuItem>
              <MenuItem value={"Paris X (75010)"}>Paris X (75010)</MenuItem>
              <MenuItem value={"Paris XI (75011)"}>Paris XI (75011)</MenuItem>
              <MenuItem value={"Paris XII (75012)"}>Paris XII (75012)</MenuItem>
              <MenuItem value={"Paris XIII (75013)"}>
                Paris XIII (75013)
              </MenuItem>
              <MenuItem value={"Paris XIV (75014)"}>Paris XIV (75014)</MenuItem>
              <MenuItem value={"Paris XV (75015)"}>Paris XV (75015)</MenuItem>
              <MenuItem value={"Paris XVI (75016)"}>Paris XVI (75016)</MenuItem>
              <MenuItem value={"Paris XVII (75017)"}>
                Paris XVII (75017)
              </MenuItem>
              <MenuItem value={"Paris XVIII (75018)"}>
                Paris XVIII (75018)
              </MenuItem>
              <MenuItem value={"Paris XIX (75019)"}>Paris XIX (75019)</MenuItem>
              <MenuItem value={"Paris XX (75020)"}>Paris XX (75020)</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              style={{ width: "100%" }}
              id="standard-require"
              type="date"
              label="Date de livraison"
              defaultValue={materialDateInput}
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              select
              style={{ width: "100%" }}
              id="standard-require"
              label="Créneau horaire de livraison"
              variant="filled"
            >
              <MenuItem value={10}>10H-14H</MenuItem>
              <MenuItem value={20}>14H-18H</MenuItem>
              <MenuItem value={30}>18H-20H</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              style={{ width: "100%" }}
              id="standard-require"
              label="N° et nom de rue"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              style={{ width: "100%" }}
              id="standard-require"
              label="Bâtiment, digicode, interphone, étage, porte, ..."
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              style={{ width: "100%" }}
              id="standard-require"
              label="Ville"
              variant="filled"
              defaultValue="Paris"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <TextField
              required
              style={{ width: "100%" }}
              id="standard-require"
              label="Code Postal"
              variant="filled"
              //value={cp}
              disabled
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
