import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import { countries } from "../../app/local/countries";

export interface Country {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export default function CountrySelect() {
  const [value, setValue] = React.useState<Country | null>(null);
  const [open, setOpen] = React.useState(false);

  return (
    <Autocomplete
      id="country-select-demo"
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      options={countries}
      autoHighlight
      defaultValue={{
        code: "US",
        label: "United States",
        phone: "1",
        suggested: true,
      }}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          variant="standard"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // Disable autocomplete and autofill
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: value ? (
              <InputAdornment position="start" onClick={() => setOpen(true)}>
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${value.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${value.code.toLowerCase()}.png 2x`}
                  alt=""
                />
              </InputAdornment>
            ) : null,
          }}
          sx={{
            width: "100%",
            color: "black.dark",
            "& .MuiInputBase-root": {
              height: "40px",
              color: "black",
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "black.dark",
            },
            "& label": {
              color: "black",
            },
            "& label.Mui-focused": {
              color: "black.dark",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "black.dark",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "black.dark",
            },
          }}
        />
      )}
    />
  );
}
