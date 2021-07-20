import React from 'react'
import { Field, Formik, ErrorMessage } from "formik";
import { TextField, Button } from "@material-ui/core";

import styles from './search.module.css';

import * as Yup from "yup";


const Search = () => {
    return (
      <div className={styles.searchContainer}>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={(values) => {
            console.log("submitting", values);
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(50, "maximum 50 characters are allowed!")
          })}>
          {({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit}>
              {console.log("rendering")}
              <Field
                name="search"
                type="text"
                as={TextField}
                variant="outlined"
                placeholder="Karachi"
                label="search job"
              />
              <ErrorMessage
                name="name"
                render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
              />
              <Button variant="contained" >Search</Button>
            </form>
          )}
        </Formik>
      </div>
    );
}

export default Search
