import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

export default function Places({ setCoord }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here if we want to */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setCoord({ lat, lng });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;
      /* wrap the below in a menuItem tag to make arrowkey dropdown */
      return (
        <Grid
          container
          alignItems="center"
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <Grid item xs>
            <Typography>
              <LocationOnIcon /> {main_text} {secondary_text}
            </Typography>
          </Grid>
        </Grid>
      );
    });

  return (
    <div ref={ref}>
      <TextField
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where do you need help?"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && renderSuggestions()} {/* wrap this in select tag */}
    </div>
  );
}
