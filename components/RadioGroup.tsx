import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { IInputGroup } from "../types/InputInterface";

export default function RadioGroup({
  label,
  value,
  price,
  options,
  handleChange,
  setSelectedValue,
  selectedValue,
}: IInputGroup) {
  const Radio = styled.div`
    display: flex;
    justify-content: space-between;
    .radio-buttons {
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .custom-radio {
      input {
        display: none;
        &:checked {
          + {
            .radio-btn {
              border: 3px solid #c09957;
              .radio-btn__content__check-icon {
                background-color: #c09957;
                .radio-btn__content__check-icon__icon {
                  &::before {
                    transform: scale(1);
                  }
                  &::after {
                    transform: scale(1);
                  }
                }
              }
            }
          }
        }
      }
      .radio-btn {
        position: relative;
        width: 180px;
        height: auto;
        margin: 10px;
        background-color: #d9d9d9;
        border: 4px solid transparent;
        border-radius: 20px;
        cursor: pointer;
        &__content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          &__product-img {
            width: 80px;
            height: 80px;
            margin: 10px 0;
            border-radius: 50%;
            overflow: hidden;
          }
          &__product-size {
            color: #000000;
            margin-bottom: 5px;
            font-size: 20px;
            font-weight: 700;
            text-transform: capitalize;
          }
          &__skill {
            display: inline-block;
            margin-bottom: 10px;
            color: #5f5f5f;
            font-size: 20px;
            text-transform: capitalize;
          }
          &__check-icon {
            width: 30px;
            height: 30px;
            background-color: #222533;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            &__icon {
              display: inline-block;
              position: relative;
              width: 18px;
              height: 8px;
              margin-top: -2px;
              transform: rotate(-40deg);
              &::before {
                content: "";
                width: 3px;
                height: 100%;
                background-color: #ffffff;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 10px;
                box-shadow: -2px 0 5px rgba(0, 0, 0, 0.231);
                transform: scaleY(0);
                transform-origin: top;
                transition: all 0.2s ease-in-out;
                z-index: 1000;
              }
              &::after {
                content: "";
                width: 100%;
                height: 3px;
                background-color: #ffffff;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 10px;
                box-shadow: 0 3px 5px rgba(0, 0, 0, 0.231);
                transform: scaleX(0);
                transform-origin: left;
                transition: all 0.2s ease-in-out;
                transition-delay: 0.1s;
              }
            }
          }
        }
      }
    }
  `;
  
  //console.log("============= VALUE", value)
  //console.log("============= OPTIONS", options)
  //console.log("============= LABEL", label)
  // console.log("========= SELECTED VALUE : ", selectedValue);

  return (
    <>
      <Radio>
        <div className="radio-buttons">
          <label className="custom-radio">
            <input
              type="radio"
              name="radio"
              value={label}
              onChange={handleChange}
              checked={selectedValue === label}
            />
            <div className="radio-btn">
              <div className="radio-btn__content">
                <div className="radio-btn__content__product-img">
                  <Image
                    src={"/images/office-image.jpg"}
                    alt={""}
                    width={90}
                    height={100}
                  />
                </div>
                <p className="radio-btn__content__product-size">{label}</p>
                <div className="radio-btn__content__skill">{price} €</div>
                <div className="radio-btn__content__check-icon">
                  <div className="radio-btn__content__check-icon__icon"></div>
                </div>
              </div>
            </div>
          </label>
        </div>
      </Radio>
    </>
  );
}
