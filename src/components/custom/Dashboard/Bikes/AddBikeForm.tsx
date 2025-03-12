import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Bike } from "lucide-react";
import { useAddBikeMutation } from "@/redux/features/bike/bikeApi";
import { toast } from "sonner";
import { ADD_BIKE_FORM_SCHEMA } from "@/constants/addBike.constant";
import InputField from "../../FormFields/InputField";
import TextareaField from "../../FormFields/TextareaField";

export function AddBikeForm() {
  const [addBike, { isLoading }] = useAddBikeMutation();

  const form = useForm<z.infer<typeof ADD_BIKE_FORM_SCHEMA>>({
    resolver: zodResolver(ADD_BIKE_FORM_SCHEMA),
    defaultValues: {
      name: "",
      brand: "",
      model: "",
      cc: 150,
      year: new Date().getFullYear(),
      pricePerHour: 20,
      image: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ADD_BIKE_FORM_SCHEMA>) {
    try {
      console.log(values);
      await addBike(values).unwrap();
      toast.success("Bike added successfully");
      form.reset();
    } catch {
      toast.error("Failed to add bike");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              control={form.control}
              name="name"
              label="Bike Name"
              placeholder="Enter bike name"
            />
            <InputField
              control={form.control}
              name="brand"
              label="Brand"
              placeholder="Enter brand name"
            />
            <InputField
              control={form.control}
              name="model"
              label="Model"
              placeholder="Enter model name"
            />
            <InputField
              control={form.control}
              name="cc"
              label="Engine Size (CC)"
              type="number"
            />
            <InputField
              control={form.control}
              name="year"
              label="Manufacturing Year"
              type="number"
            />
            <InputField
              control={form.control}
              name="pricePerHour"
              label="Price Per Hour ($)"
              type="number"
            />
            <InputField
              control={form.control}
              name="image"
              label="Image URL"
              placeholder="Enter image URL"
            />
          </div>

          <TextareaField
            control={form.control}
            name="description"
            label="Description"
            placeholder="Describe the bike features and specifications"
          />
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Bike className="h-4 w-4 animate-spin" />
              Adding Bike...
            </div>
          ) : (
            "Add Bike"
          )}
        </Button>
      </form>
    </Form>
  );
}
