import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "../components/Form";
import {defaultFood} from '../images/index'

function CreateResipe() {
  const [detail, setDetail] = useState({
    foodName: "",
    caption: "",
    portion: "",
    duration: "",
    difficulty: "easy",
  });
  const [image, setImage] = useState({ file: null, preview: defaultFood, name:null });
  const [ingredient, setIngredient] = useState(["", ""]);
  const [step, setStep] = useState([""]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // useEffect(() => {
  //   console.log(detail.difficulty);
  // }, [detail.difficulty]);

  const handleSubmit = (event) => {
    setLoading(true);
    let data = new FormData();
    // openModal();

    data.append('title', detail.foodName);
    data.append('body', detail.caption);
    data.append('ingredients', JSON.stringify(ingredient));
    data.append('steps', JSON.stringify(step));
    data.append('portion', detail.portion);
    data.append('duration', detail.duration);
    data.append('difficulty', detail.difficulty);
    data.append('image', image.file);

    axios.post('http://localhost:3001/v1/recipes/add', data)
      .then(res => {
        console.log('proses');
        console.log(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
    
    event.preventDefault();
  };

  const handleImage = (event) => {
    // setImage({
    //   file: event.target.files[0]
    // })
    if (!event.target.files || event.target.files.length === 0) {
      setImage({ ...image });
    }
    else {
      setImage({
        file: event.target.files[0],
        preview: URL.createObjectURL(event.target.files[0]),
        name: event.target.files[0].name
      });
    }
    event.preventDefault();
  };

  const handleDetail = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    setDetail({ ...detail, [name]: val });
    // console.log(detail);
    event.preventDefault();
  };

  const addInput = (event, target) => {
    if (target === "ingredient") {
      setIngredient([...ingredient, ""]);
    } else {
      setStep([...step, ""]);
    }
    event.preventDefault();
  };

  const handleIngredient = (event, idx) => {
    let temp = [...ingredient];
    temp[idx] = event.target.value;
    setIngredient(temp);
    event.preventDefault();
  };

  const deleteIngredient = (event, idx) => {
    let temp = [...ingredient];
    temp.splice(idx, 1);
    setIngredient(temp);
    event.preventDefault();
  };

  const handleStep = (event, idx) => {
    let temp = [...step];
    temp[idx] = event.target.value;
    setStep(temp);
    event.preventDefault();
  };

  const deleteStep = (event, idx) => {
    let temp = [...step];
    temp.splice(idx, 1);
    setStep(temp);
    event.preventDefault();
  };

  return (
    <>
      <Form
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        handleDetail={handleDetail}
        handleImage={handleImage}
        handleIngredient={handleIngredient}
        handleStep={handleStep}
        detail={detail}
        image={image}
        ingredient={ingredient}
        step={step}
        addInput={addInput}
        deleteIngredient={deleteIngredient}
        deleteStep={deleteStep}
        loading={loading}
      />
    </>
  );
}

export default CreateResipe;
