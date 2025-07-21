import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TBike } from "@/types";
import { useCreateRentalMutation } from "@/redux/features/rental/rentalApi";

const RentButtonWithPayment = ({ bike }: { bike: TBike }) => {
  const [createRental] = useCreateRentalMutation();
  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    const rentalInfo = {
      bikeId: (e.target as HTMLFormElement).bikeId.value,
      startTime: new Date().toISOString(),
    };

    const result = await createRental(rentalInfo).unwrap();
    window.location.href = result.data.payment_url;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          disabled={!bike.isAvailable}
          className={`w-full py-2 px-4 rounded text-white text-sm font-medium transition-colors ${
            bike.isAvailable
              ? "bg-blue-950 hover:bg-blue-900"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Rent Now
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form className="w-full" onSubmit={handlePayment}>
          <input type="hidden" name="bikeId" value={bike._id} />
          <DialogHeader>
            <DialogTitle>Pay 500 TK as service charge?</DialogTitle>
            <DialogDescription>
              To rent this bike, you need to pay 500 TK as service charge. Click
              "Proceed" to proceed with the payment.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="pt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Proceed</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RentButtonWithPayment;
