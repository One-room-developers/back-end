import { axios } from '@nestjs/axios';

const GET_EPISODE = "GET_EPISODE";

const getEpisode = createAction(GET_EPISODE, (episode_list) => ({ episode_list }));

const initialState = {
  episode_list: [],
};

const getEpisodeAPI = () => {
  axios({
    method: "GET",
    url: `/play`,
  }).then((res) => {
    const episode_list = res.data.data;
    console.log('GET Episodes', episode_list);
  })
  .catch(error => console.log('error'));
};

export default handleActions(
  {
    [GET_EPISODE]: (state, action) =>
    produce(state, (draft) => {
      draft.episode_list = action.payload.episode_list;
    }),
  },
  initialState
);

const actionCreators = { getEpisode, getEpisodeAPI };

export { actionCreators };