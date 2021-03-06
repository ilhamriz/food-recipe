import React from "react";
import "./Form.css";
import { InputForm } from "./InputForm";
import Modal from "./Modal";
import TitleForm from "./TitleForm";
import { BeatLoader } from "react-spinners";
import Button from "./Button";
import Dropdown from "./Dropdown";

const Form = ({
  modalIsOpen,
  closeModal,
  handleSubmit,
  handleDetail,
  handleImage,
  handleIngredient,
  handleStep,
  detail,
  image,
  ingredient,
  step,
  addInput,
  deleteIngredient,
  deleteStep,
  loading,
  maxSizePhoto,
}) => {
  return (
    <div className="form">
      <div className="form-container">
        <TitleForm />
        <Modal show={modalIsOpen} close={closeModal}>
          Publish success.
        </Modal>
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="form-card">
            <div className="wrap-recipe">
              <div className="photo-container">
                <p className="label-input">Photo of your cooking</p>
                <div className="photo-wrap">
                  <img
                    src={image.preview}
                    className="img-food"
                    alt="FoodImage"
                  />
                  <div className="photo-input-container">
                    <InputForm
                      tag="input"
                      type="file"
                      name="image"
                      id="my-file"
                      className="input-file"
                      onChange={handleImage}
                    />
                    <label htmlFor="my-file" className="input-file-trigger">
                      Select a photo
                    </label>
                    {maxSizePhoto ? (
                      <p className="name-file warning">Max 2MB !</p>
                    ) : null}
                    <p className="name-file">{image.name}</p>
                  </div>
                </div>
              </div>

              <div className="food-name-container">
                <p className="label-input">Food Name</p>
                <InputForm
                  tag="input"
                  id="food-name"
                  type="text"
                  name="foodName"
                  value={detail.foodName}
                  onChange={handleDetail}
                />
              </div>

              <div className="caption-container">
                <p className="label-input">Caption</p>
                <InputForm
                  tag="textarea"
                  name="caption"
                  value={detail.caption}
                  onChange={handleDetail}
                />
              </div>

              <div className="select-container">
                <div className="portion-container">
                  <p className="label-input">Portion</p>
                  <input type="number" name="portion" value={detail.duration} onChange={handleDetail} min='0'/>
                  <span>persons</span>
                </div>
                <div className="duration-container">
                  <p className="label-input">Duration</p>
                  <input type="number" name="duration" value={detail.duration} onChange={handleDetail} min='0'/>
                  <span>minutes</span>
                </div>
                <div className="difficulty-container">
                  <p className="label-input">Difficulty</p>
                  <Dropdown
                    className='hover-none'
                    name="difficulty"
                    value={detail.difficulty}
                    onChange={handleDetail}
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </Dropdown>
                </div>
              </div>
            </div>

            <div className="wrap-recipe">
              <p className="label-input">Ingredients</p>
              {ingredient.map((val, idx) => {
                return (
                  <div className="input-array" key={idx}>
                    <InputForm
                      tag="input"
                      type="text"
                      name="ingre"
                      placeholder="1 tablespoon sugar"
                      value={val}
                      onChange={(e) => handleIngredient(e, idx)}
                    />
                    <i
                      className="fas fa-times"
                      onClick={(e) => deleteIngredient(e, idx)}
                    />
                  </div>
                );
              })}
              <p
                className="addInput"
                onClick={(e, target = "ingredient") => addInput(e, target)}
              >
                + Ingredient
              </p>
            </div>

            <div className="wrap-recipe">
              <p className="label-input">Directions</p>
              {step.map((val, idx) => {
                return (
                  <div className="input-array input-ingredient" key={idx}>
                    <section className='input-array__number'>
                      <div className="number-direction">{idx + 1}</div>
                    </section>
                    <section className='input-array__textarea'>
                      <textarea
                        className='input-ingredient'
                        name='ingre'
                        placeholder='Cut the chicken into pieces'
                        value={val}
                        onChange={(e) => handleStep(e, idx)}
                      />
                      <i
                        className="fas fa-times"
                        onClick={(e) => deleteStep(e, idx)}
                      />
                    </section>
                  </div>
                );
              })}
              <p
                className="addInput"
                onClick={(e, target = "step") => addInput(e, target)}
              >
                + Step
              </p>
            </div>

            <div className="submit">
              <Button type="submit" className="btn-primary">
                {loading ? (
                  <BeatLoader loading={loading} size={7} color={"#FFFFFF"} />
                ) : (
                  "Publish"
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
