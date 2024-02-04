import {usePathname, useRouter} from "next/navigation";
import {useQuery} from "@tanstack/react-query";

export default function useAuthQuery() {
  const router = useRouter();
  return useQuery({
    queryKey: ['user'],
    queryFn() {
      const userSession = sessionStorage.getItem('user');
      return userSession ? JSON.parse(userSession) : router.replace('/signin');
    }
  });
}