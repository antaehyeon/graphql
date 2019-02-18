Over-Fetching: 요청한 정보보다 더 많은 정보들을 받는 것
Under-Fetching: 하나를 완성하기 위해 많은 소스를 요청하는 것

GraphQL isn't need URL
one End-Point (/GraphQL) => one Query

graphQL Query Example
{
  feed {
    comments
    likeNumber
  }
  notification {
    isRead
  }
  user {
    username
    profilePic
  }
}

{
  feed: [
    {
      comments: 1,
      likeNumber: 20,
    }
  ],
  notifications: [
    {
      isRead: true
    },
    {
      isRead: false
    }
  ],
  user: {
    username: 'nico',
    profile: 'http:'
  }
}

-> you want received information from graphQL