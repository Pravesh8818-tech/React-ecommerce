import React from "react";

import {
  Button,
  Checkbox,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";

import { useState } from "react";

export function ModalSection() {
  const [openModal, setOpenModal] = useState(false);
  const [checkOutData, setCheckOutData] = useState({
    name: "",
    email: "",
    pincode: "",
    mobile: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCheckOutData({ ...checkOutData, [name]: value });
    console.log(checkOutData);
  };

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <>
      <Button
        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
        onClick={() => setOpenModal(true)}
      >
        CheckOut
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <ModalHeader />
        <ModalBody>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name">Your Full Name</Label>
              </div>
              <TextInput
                id="name"
                placeholder="Your Full Name"
                name="name"
                value={checkOutData.name}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">Your Full Email</Label>
              </div>
              <TextInput
                id="email"
                placeholder="email@company.com"
                name="email"
                value={checkOutData.email}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="pincode">Your Full pincode</Label>
              </div>
              <TextInput
                id="pincode"
                placeholder="Enter Your Pincode"
                name="pincode"
                value={checkOutData.pincode}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="mobile">Your Full Mobile</Label>
              </div>
              <TextInput
                id="mobile"
                placeholder="Enter your mobile number"
                name="mobile"
                value={checkOutData.mobile}
                onChange={handleInput}
                required
              />
            </div>

            <div className="w-full">
              <Button>CheckOut</Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ModalSection;
