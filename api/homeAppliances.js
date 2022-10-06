import axios from "axios";
import { API_URL } from "utils/data";

export const getSegmentByCategory = async (categoryID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/segments_by_category?category=${categoryID}`)
      .then((data) => {
        if (data.status === 200) {
          if (data.data.data !== undefined) {
            return data.data.data;
          } else {
            return [];
          }
        }
      })
      .catch((err) => {
        return [];
      });
  } catch (e) {
    console.log(e);
  }
};

export const getIssuesBySegments = async (segmentID) => {
  try {
    return await axios
      .get(`${API_URL}api/v1/issues_by_segments?segment=${segmentID}`)
      .then((data) => {
        if (data.status === 200) {
          if (data.data.data !== undefined) {
            return data.data.data;
          } else {
            return [];
          }
        }
      })
      .catch((err) => {
        return [];
      });
  } catch (e) {
    console.log(e);
  }
};

export const getIssuesBySegmentsDetails = async (segmentID) => {
  try {
    return await axios
      .get(
        `${API_URL}api/v1/issues_by_segments_detail?segment=${segmentID}&city=${1}`
      )
      .then((data) => {
        if (data.status === 200) {
          if (data.data.data !== undefined) {
            return data.data.data;
          } else {
            return [];
          }
        }
      })
      .catch((err) => {
        return [];
      });
  } catch (e) {
    console.log(e);
  }
};
