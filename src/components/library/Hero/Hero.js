import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  const history = useHistory();
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e?.target?.value);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    if (!input?.length) {
      return;
    }

    // Utilize the address bar to set off fetch calls to Github //
    history.push(`/results/${input}`);
    setInput("");
  };

  return (
    <section className="gh-hero">
      <h1>
        <Link to="/" className="gh-hero__home-link">
          Github Repository Search Tool
        </Link>
      </h1>
      <form className="gh-hero__search" onSubmit={handleSubmit}>
        <TextInput
          value={input}
          onChange={handleInputChange}
          name="search"
          placeholder="Enter repo info"
          label="Search Github Repos"
        />
        <Button type="submit" version="primary">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Hero;
