import { get } from "../../utils/AxiosAdapter";

export const listAnimalsService = async (pairsCount: number): Promise<[]> => {
  // const uri = `https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20`;
  const uri = `http://localhost:4000/api/animals?pairs_count=${pairsCount || 6}`;
  const response = await get({
    url: uri,
  });

  return response;
};
