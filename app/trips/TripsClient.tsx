'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { SafeReservation } from "@/app/types";
import { SafeUser } from "@/app/types";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";

interface TripsClientProps {
  reservations: SafeReservation[],
  currentUser?: SafeUser | null,
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/reservations/${id}`)
    .then(() => {
      toast.success('Reservation cancelled');
      router.refresh();
    })
    .catch((error) => {
      toast.error(error?.response?.data?.error)
    })
    .finally(() => {
      setDeletingId('');
    })
  }, [router]);


  const isPastDate = (endDate: any) => {
    const endTimeStamp = new Date(endDate).getTime()
    const todayTimeStamp = new Date().getTime()

    if (endTimeStamp < todayTimeStamp) return true
    return false
  }

  const shouldDisable = (reservation: any) => {
    if (isPastDate(reservation.endDate)) return true
    return deletingId === reservation.id
  }

  const getLabel = (reservation: any) => {
    if (isPastDate(reservation.endDate)) return "Past trip, thanks for your stay"
    return "Cancel reservation"
  }

  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <div 
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {reservations.map((reservation: any) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={shouldDisable(reservation)}
            actionLabel={getLabel(reservation)}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
   );
}
 
export default TripsClient;