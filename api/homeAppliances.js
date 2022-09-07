import axios from "axios";
import { API_URL } from "utils/data";

export const getSegmentByCategory = async (categoryID) => {
  return await axios
    .get(`${API_URL}api/v1/segments_by_category?category=${categoryID}`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};

export const getIssuesBySegments = async (segmentID) => {
  return await axios
    .get(`${API_URL}api/v1/issues_by_segments?segment=${segmentID}`)
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};

export const getIssuesBySegmentsDetails = async (segmentID, cityID) => {
  return await axios
    .get(
      `${API_URL}api/v1/issues_by_segments_detail?segment=${segmentID}&city=${cityID}`
    )
    .then((data) => {
      if (data.status === 200) {
        return data.data.data;
      }
    })
    .catch((err) => {
      return [];
    });
};
