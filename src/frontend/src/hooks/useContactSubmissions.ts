import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useContactSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['contact-submissions'],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getAllContacts();
    },
    enabled: !!actor && !isFetching
  });
}
