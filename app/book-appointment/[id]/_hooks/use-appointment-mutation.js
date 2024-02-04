import {useMutation, useQuery} from "@tanstack/react-query";
import * as emailjs from "@emailjs/browser";
import useAuthQuery from "../../../use-auth-query";

export default function useAppointmentMutation() {
  const {data: user} = useAuthQuery();

  return useMutation({
    async mutationFn(f) {
      await emailjs.send(
        'default_service',
        'template_k8t1cqd',
        {
          doctorName: f.doctor.name,
          date: f.selectedDate.getDate()
            + ' ' + f.selectedDate.toLocaleString('default', {month: 'short'}),
          time: f.selectedInterval,
          toEmail: user.email,
        },
        'uQjs5Cj6Jpi2ODXO4'
      );
    },
  });
}
