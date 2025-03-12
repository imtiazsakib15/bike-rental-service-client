import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bike } from "lucide-react";
import { AddBikeForm } from "./AddBikeForm";

export function AddBikeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-2">
          <Bike className="h-4 w-4" />
          Add New Bike
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Bike to Inventory</DialogTitle>
        </DialogHeader>
        <AddBikeForm />
      </DialogContent>
    </Dialog>
  );
}
