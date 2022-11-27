export const EXERCISE_QUERY = `
query {
    exercises (pagination: { limit: 200 }) {
      data {
        attributes {
          title
          urlVideo
          tags
          slug
        }
      }
    }
  }
`;

export const GET_EXERCISE_QUERY = `
query getExercise($slug: String!) {
    exercises(filters: { slug: { eq: $slug } }) {
        data {
            attributes {
              title
              urlVideo
              tags
              slug
              instruction
              images {
                data{
                  attributes{
                    formats
                  }
                }
              }
            }
        }
    }
  }
`;

export const GET_HOME = `
query {
	home{
    data{
      attributes {
        text
      }
    }
  }
}
`;

export const GET_VDKT = `
query {
	voorDeKinesitherapeut{
    data{
      attributes {
        text
      }
    }
  }
}
`;

export const GET_VDP = `
query {
	voorDePatient{
    data{
      attributes {
        text
      }
    }
  }
}
`;

export const GET_HANDLEIDING = `
query {
	handleiding{
    data{
      attributes {
        text
      }
    }
  }
}
`;
