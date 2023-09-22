import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import { RestaurantsType, ReviewsList } from "../interfaces/types";

export const FetchSingle = (propToSelect: string, target?: string) => {
  const [fetchData, setFetchData] = useState<RestaurantsType>();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("Restaurants")
        .select()
        .eq(propToSelect, target)
        .single();

      if (data) {
        setFetchData(data);
      }
    };

    fetchData();
  }, [propToSelect, target]);

  console.log(fetchData);

  return fetchData;
};

export const useFetchAll = () => {
  const [fetchData, setFetchData] = useState<RestaurantsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("Restaurants").select();

      if (data) {
        setFetchData(data);
      }
    };

    fetchData();
  }, []);

  console.log(fetchData);

  return fetchData;
};

export const useUpdate = (
  propToSelect: string,
  target: string | undefined,
  prop: any
) => {
  const [fetchData, setFetchData] = useState<ReviewsList>();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("Restaurants")
        .update(prop)
        .eq(propToSelect, target);

      if (data) {
        setFetchData(data);
      }
    };

    fetchData();
  }, [propToSelect, target, prop]);

  console.log(fetchData);

  return fetchData;
};
