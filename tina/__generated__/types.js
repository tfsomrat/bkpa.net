export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const HomepagePartsFragmentDoc = gql`
    fragment HomepageParts on Homepage {
  banner {
    __typename
    title
    image
    color
    content
  }
  notice {
    __typename
    enable
    title
    content
  }
  body
}
    `;
export const AuthorPartsFragmentDoc = gql`
    fragment AuthorParts on Author {
  draft
  title
  image
  bio
  phone
  email
  address
  body
}
    `;
export const PostsPartsFragmentDoc = gql`
    fragment PostsParts on Posts {
  draft
  title
  date
  description
  image
  body
}
    `;
export const Emergency_ContactsPartsFragmentDoc = gql`
    fragment Emergency_contactsParts on Emergency_contacts {
  draft
  title
  body
}
    `;
export const AboutPartsFragmentDoc = gql`
    fragment AboutParts on About {
  draft
  title
  image
  description
  body
}
    `;
export const BloodBanksPartsFragmentDoc = gql`
    fragment BloodBanksParts on BloodBanks {
  draft
  title
  description
  layout
  contact_list {
    __typename
    name
    specialist
    location
    contact_details
  }
  body
}
    `;
export const DialysisCentersPartsFragmentDoc = gql`
    fragment DialysisCentersParts on DialysisCenters {
  draft
  title
  description
  layout
  contact_list {
    __typename
    name
    specialist
    location
    contact_details
  }
  body
}
    `;
export const HospitalsPartsFragmentDoc = gql`
    fragment HospitalsParts on Hospitals {
  draft
  title
  description
  layout
  contact_list {
    __typename
    name
    specialist
    location
    contact_details
  }
  body
}
    `;
export const NephrologyDoctorsPartsFragmentDoc = gql`
    fragment NephrologyDoctorsParts on NephrologyDoctors {
  draft
  title
  description
  layout
  contact_list {
    __typename
    name
    specialist
    location
    contact_details
  }
  body
}
    `;
export const UrologyDoctorsPartsFragmentDoc = gql`
    fragment UrologyDoctorsParts on UrologyDoctors {
  draft
  title
  description
  layout
  contact_list {
    __typename
    name
    specialist
    location
    contact_details
  }
  body
}
    `;
export const VascularSurgeonsPartsFragmentDoc = gql`
    fragment VascularSurgeonsParts on VascularSurgeons {
  draft
  title
  description
  layout
  contact_list {
    __typename
    name
    specialist
    location
    contact_details
  }
  body
}
    `;
export const FaqPartsFragmentDoc = gql`
    fragment FaqParts on Faq {
  draft
  title
  layout
  description
  body
}
    `;
export const ContactPartsFragmentDoc = gql`
    fragment ContactParts on Contact {
  draft
  title
  description
  layout
  contact_items {
    __typename
    name
    icon
    content
  }
  body
}
    `;
export const HomepageDocument = gql`
    query homepage($relativePath: String!) {
  homepage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomepageParts
  }
}
    ${HomepagePartsFragmentDoc}`;
export const HomepageConnectionDocument = gql`
    query homepageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomepageFilter) {
  homepageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomepageParts
      }
    }
  }
}
    ${HomepagePartsFragmentDoc}`;
export const AuthorDocument = gql`
    query author($relativePath: String!) {
  author(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AuthorParts
  }
}
    ${AuthorPartsFragmentDoc}`;
export const AuthorConnectionDocument = gql`
    query authorConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AuthorFilter) {
  authorConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AuthorParts
      }
    }
  }
}
    ${AuthorPartsFragmentDoc}`;
export const PostsDocument = gql`
    query posts($relativePath: String!) {
  posts(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostsParts
  }
}
    ${PostsPartsFragmentDoc}`;
export const PostsConnectionDocument = gql`
    query postsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostsFilter) {
  postsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostsParts
      }
    }
  }
}
    ${PostsPartsFragmentDoc}`;
export const Emergency_ContactsDocument = gql`
    query emergency_contacts($relativePath: String!) {
  emergency_contacts(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...Emergency_contactsParts
  }
}
    ${Emergency_ContactsPartsFragmentDoc}`;
export const Emergency_ContactsConnectionDocument = gql`
    query emergency_contactsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: Emergency_contactsFilter) {
  emergency_contactsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...Emergency_contactsParts
      }
    }
  }
}
    ${Emergency_ContactsPartsFragmentDoc}`;
export const AboutDocument = gql`
    query about($relativePath: String!) {
  about(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AboutParts
  }
}
    ${AboutPartsFragmentDoc}`;
export const AboutConnectionDocument = gql`
    query aboutConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AboutFilter) {
  aboutConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AboutParts
      }
    }
  }
}
    ${AboutPartsFragmentDoc}`;
export const BloodBanksDocument = gql`
    query bloodBanks($relativePath: String!) {
  bloodBanks(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...BloodBanksParts
  }
}
    ${BloodBanksPartsFragmentDoc}`;
export const BloodBanksConnectionDocument = gql`
    query bloodBanksConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: BloodBanksFilter) {
  bloodBanksConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...BloodBanksParts
      }
    }
  }
}
    ${BloodBanksPartsFragmentDoc}`;
export const DialysisCentersDocument = gql`
    query dialysisCenters($relativePath: String!) {
  dialysisCenters(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...DialysisCentersParts
  }
}
    ${DialysisCentersPartsFragmentDoc}`;
export const DialysisCentersConnectionDocument = gql`
    query dialysisCentersConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: DialysisCentersFilter) {
  dialysisCentersConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...DialysisCentersParts
      }
    }
  }
}
    ${DialysisCentersPartsFragmentDoc}`;
export const HospitalsDocument = gql`
    query hospitals($relativePath: String!) {
  hospitals(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HospitalsParts
  }
}
    ${HospitalsPartsFragmentDoc}`;
export const HospitalsConnectionDocument = gql`
    query hospitalsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HospitalsFilter) {
  hospitalsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HospitalsParts
      }
    }
  }
}
    ${HospitalsPartsFragmentDoc}`;
export const NephrologyDoctorsDocument = gql`
    query nephrologyDoctors($relativePath: String!) {
  nephrologyDoctors(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...NephrologyDoctorsParts
  }
}
    ${NephrologyDoctorsPartsFragmentDoc}`;
export const NephrologyDoctorsConnectionDocument = gql`
    query nephrologyDoctorsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: NephrologyDoctorsFilter) {
  nephrologyDoctorsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...NephrologyDoctorsParts
      }
    }
  }
}
    ${NephrologyDoctorsPartsFragmentDoc}`;
export const UrologyDoctorsDocument = gql`
    query urologyDoctors($relativePath: String!) {
  urologyDoctors(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...UrologyDoctorsParts
  }
}
    ${UrologyDoctorsPartsFragmentDoc}`;
export const UrologyDoctorsConnectionDocument = gql`
    query urologyDoctorsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: UrologyDoctorsFilter) {
  urologyDoctorsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...UrologyDoctorsParts
      }
    }
  }
}
    ${UrologyDoctorsPartsFragmentDoc}`;
export const VascularSurgeonsDocument = gql`
    query vascularSurgeons($relativePath: String!) {
  vascularSurgeons(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...VascularSurgeonsParts
  }
}
    ${VascularSurgeonsPartsFragmentDoc}`;
export const VascularSurgeonsConnectionDocument = gql`
    query vascularSurgeonsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: VascularSurgeonsFilter) {
  vascularSurgeonsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...VascularSurgeonsParts
      }
    }
  }
}
    ${VascularSurgeonsPartsFragmentDoc}`;
export const FaqDocument = gql`
    query faq($relativePath: String!) {
  faq(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FaqParts
  }
}
    ${FaqPartsFragmentDoc}`;
export const FaqConnectionDocument = gql`
    query faqConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FaqFilter) {
  faqConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FaqParts
      }
    }
  }
}
    ${FaqPartsFragmentDoc}`;
export const ContactDocument = gql`
    query contact($relativePath: String!) {
  contact(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContactParts
  }
}
    ${ContactPartsFragmentDoc}`;
export const ContactConnectionDocument = gql`
    query contactConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContactFilter) {
  contactConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContactParts
      }
    }
  }
}
    ${ContactPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    homepage(variables, options) {
      return requester(HomepageDocument, variables, options);
    },
    homepageConnection(variables, options) {
      return requester(HomepageConnectionDocument, variables, options);
    },
    author(variables, options) {
      return requester(AuthorDocument, variables, options);
    },
    authorConnection(variables, options) {
      return requester(AuthorConnectionDocument, variables, options);
    },
    posts(variables, options) {
      return requester(PostsDocument, variables, options);
    },
    postsConnection(variables, options) {
      return requester(PostsConnectionDocument, variables, options);
    },
    emergency_contacts(variables, options) {
      return requester(Emergency_ContactsDocument, variables, options);
    },
    emergency_contactsConnection(variables, options) {
      return requester(Emergency_ContactsConnectionDocument, variables, options);
    },
    about(variables, options) {
      return requester(AboutDocument, variables, options);
    },
    aboutConnection(variables, options) {
      return requester(AboutConnectionDocument, variables, options);
    },
    bloodBanks(variables, options) {
      return requester(BloodBanksDocument, variables, options);
    },
    bloodBanksConnection(variables, options) {
      return requester(BloodBanksConnectionDocument, variables, options);
    },
    dialysisCenters(variables, options) {
      return requester(DialysisCentersDocument, variables, options);
    },
    dialysisCentersConnection(variables, options) {
      return requester(DialysisCentersConnectionDocument, variables, options);
    },
    hospitals(variables, options) {
      return requester(HospitalsDocument, variables, options);
    },
    hospitalsConnection(variables, options) {
      return requester(HospitalsConnectionDocument, variables, options);
    },
    nephrologyDoctors(variables, options) {
      return requester(NephrologyDoctorsDocument, variables, options);
    },
    nephrologyDoctorsConnection(variables, options) {
      return requester(NephrologyDoctorsConnectionDocument, variables, options);
    },
    urologyDoctors(variables, options) {
      return requester(UrologyDoctorsDocument, variables, options);
    },
    urologyDoctorsConnection(variables, options) {
      return requester(UrologyDoctorsConnectionDocument, variables, options);
    },
    vascularSurgeons(variables, options) {
      return requester(VascularSurgeonsDocument, variables, options);
    },
    vascularSurgeonsConnection(variables, options) {
      return requester(VascularSurgeonsConnectionDocument, variables, options);
    },
    faq(variables, options) {
      return requester(FaqDocument, variables, options);
    },
    faqConnection(variables, options) {
      return requester(FaqConnectionDocument, variables, options);
    },
    contact(variables, options) {
      return requester(ContactDocument, variables, options);
    },
    contactConnection(variables, options) {
      return requester(ContactConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, _options) => {
    const data = await client.request({
      query: doc,
      variables: vars
    });
    return { data: data?.data, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(createClient({ url: "http://localhost:4001/graphql", queries }))
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
