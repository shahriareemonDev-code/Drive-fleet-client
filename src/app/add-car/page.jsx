
"use client";

import React from "react";
import {
  Button,
  Card,
  Form,
  Input,
  TextArea,
  Switch,
} from "@heroui/react";

const AddCarPage = () => {
  const onSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <div className="max-w-6xl bg-slate-50 px-20 py-10 mx-auto">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold text-sky-600">
            DRIVEFLEET ADMIN
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Add New Car
          </h1>

          <p className="mt-2 text-slate-500">
            Add a premium vehicle to your rental collection.
          </p>
        </div>

        <Card className="border border-slate-200 p-5 shadow-xl shadow-slate-200/40 md:p-8">
          <Form
            onSubmit={onSubmit}
            className="grid w-full grid-cols-1 gap-5 md:grid-cols-2"
          >
            {/* Car Name */}
            <Input
              name="name"
              label="Car Name"
              placeholder="BMW 7 Series"
              variant="bordered"
             
            />

            {/* Brand */}
            <Input
              name="brand"
              label="Brand"
              placeholder="BMW"
              variant="bordered"
         
            />

            {/* Model */}
            <Input
              name="model"
              label="Model"
              placeholder="740Li"
              variant="bordered"
              
            />

            {/* Year */}
            <Input
              name="year"
              label="Year"
              placeholder="2024"
              type="number"
              variant="bordered"
    
            />

            {/* Category */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">
                Category
              </label>

              <select
                name="category"
                required
                defaultValue=""
                className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              >
                <option value="" disabled>
                  Select category
                </option>

                <option value="Luxury Sedan">Luxury Sedan</option>
                <option value="Luxury SUV">Luxury SUV</option>
                <option value="Premium Sedan">Premium Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Electric">Electric</option>
              </select>
            </div>

            {/* Location */}
            <Input
              name="location"
              label="Location"
              placeholder="Dhaka"
              variant="bordered"
              
            />

            {/* Price */}
            <Input
              name="pricePerDay"
              label="Price Per Day (BDT)"
              placeholder="15000"
              type="number"
              variant="bordered"
           
            />

            {/* Transmission */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">
                Transmission
              </label>

              <select
                name="transmission"
                required
                defaultValue=""
                className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              >
                <option value="" disabled>
                  Select transmission
                </option>

                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>

            {/* Fuel Type */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">
                Fuel Type
              </label>

              <select
                name="fuelType"
                required
                defaultValue=""
                className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              >
                <option value="" disabled>
                  Select fuel type
                </option>

                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>
            </div>

            {/* Seats */}
            <Input
              name="seats"
              label="Seats"
              placeholder="5"
              type="number"
              variant="bordered"
            
            />

            {/* Color */}
            <Input
              name="color"
              label="Color"
              placeholder="Black"
              variant="bordered"
              
            />

            {/* Engine */}
            <Input
              name="engine"
              label="Engine"
              placeholder="3.0L Turbo"
              variant="bordered"
            />

            {/* Image URL */}
            <div className="md:col-span-2">
              <Input
                name="image"
                label="Car Image URL"
                placeholder="https://example.com/car.jpg"
                type="url"
                variant="bordered"
            
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextArea
                name="description"
                label="Car Description"
                placeholder="Write a short description about the car..."
                variant="bordered"
                rows={5}
              />
            </div>

            {/* Status */}
            <div className="flex flex-wrap gap-8 py-2 md:col-span-2">
              <Switch
                name="availability"
                value="true"
                defaultSelected
              >
                Available for booking
              </Switch>

              <Switch name="featured" value="true">
                Featured car
              </Switch>
            </div>

            {/* Submit */}
            <div className="flex justify-end md:col-span-2">
              <Button
                type="submit"
                size="lg"
                className="bg-slate-900 px-10 font-semibold text-white hover:bg-sky-600"
              >
                Add Car
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default AddCarPage;