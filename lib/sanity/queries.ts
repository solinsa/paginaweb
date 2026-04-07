// ---------------------------------------------------------------------------
// GROQ queries – Solinsa CMS
// ---------------------------------------------------------------------------

// ---------- PRODUCTS ----------

export const allProductsQuery = `
  *[_type == "product"] | order(title asc) {
    _id,
    title,
    slug,
    brand,
    shortDescription,
    thumbnail,
    badge,
    featured,
    "category": category->{
      title,
      slug
    },
    price
  }
`;

export const productBySlugQuery = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    brand,
    shortDescription,
    description,
    specifications,
    images,
    thumbnail,
    badge,
    configurations,
    price,
    featured,
    metaTitle,
    metaDescription,
    "category": category->{
      _id,
      title,
      slug
    },
    "relatedProducts": relatedProducts[]->{
      _id,
      title,
      slug,
      brand,
      thumbnail,
      badge,
      shortDescription
    },
    "compatibleParts": compatibleParts[]->{
      _id,
      title,
      slug,
      partNumber,
      category,
      price,
      stock
    },
    "applications": applications[]->{
      _id,
      title,
      slug,
      badge,
      "industry": industry->title
    }
  }
`;

export const productsByCategoryQuery = `
  *[_type == "product" && category->slug.current == $categorySlug] | order(title asc) {
    _id,
    title,
    slug,
    brand,
    shortDescription,
    thumbnail,
    badge,
    featured,
    price,
    "category": category->{
      title,
      slug
    }
  }
`;

export const featuredProductsQuery = `
  *[_type == "product" && featured == true] | order(title asc) {
    _id,
    title,
    slug,
    brand,
    shortDescription,
    thumbnail,
    badge,
    price,
    "category": category->{
      title,
      slug
    }
  }
`;

export const searchProductsQuery = `
  *[_type == "product" && (
    title match $query + "*" ||
    shortDescription match $query + "*" ||
    brand match $query + "*" ||
    badge match $query + "*" ||
    category->title match $query + "*"
  )] | order(title asc) {
    _id,
    title,
    slug,
    brand,
    shortDescription,
    thumbnail,
    badge,
    price,
    "category": category->{
      title,
      slug
    }
  }
`;

// ---------- PARTS / CONSUMABLES ----------

export const allPartsQuery = `
  *[_type == "part"] | order(title asc) {
    _id,
    title,
    slug,
    partNumber,
    category,
    price,
    stock,
    images[0]
  }
`;

export const partsByProductQuery = `
  *[_type == "part" && $productSlug in compatibleWith[]->slug.current] | order(title asc) {
    _id,
    title,
    slug,
    partNumber,
    category,
    price,
    stock,
    specifications,
    images[0]
  }
`;

export const partBySlugQuery = `
  *[_type == "part" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    partNumber,
    category,
    description,
    specifications,
    images,
    price,
    stock,
    metaTitle,
    metaDescription,
    "compatibleWith": compatibleWith[]->{
      _id,
      title,
      slug,
      thumbnail
    }
  }
`;

// ---------- APPLICATIONS ----------

export const allApplicationsQuery = `
  *[_type == "application"] | order(title asc) {
    _id,
    title,
    slug,
    badge,
    image,
    "industry": industry->{
      title,
      slug,
      color
    }
  }
`;

export const applicationBySlugQuery = `
  *[_type == "application" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    badge,
    image,
    methodOverview,
    detectionLimits,
    regulations,
    caseStudy,
    downloadFile,
    metaTitle,
    metaDescription,
    "industry": industry->{
      _id,
      title,
      slug,
      color,
      icon
    },
    "equipment": equipment[]->{
      _id,
      title,
      slug,
      brand,
      thumbnail,
      shortDescription
    },
    "consumables": consumables[]->{
      _id,
      title,
      slug,
      partNumber,
      category,
      price,
      stock
    }
  }
`;

export const applicationsByIndustryQuery = `
  *[_type == "application" && industry->slug.current == $industrySlug] | order(title asc) {
    _id,
    title,
    slug,
    badge,
    image,
    "industry": industry->{
      title,
      slug,
      color
    }
  }
`;

// ---------- BLOG POSTS ----------

export const allBlogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    excerpt,
    featuredImage,
    author,
    publishedAt,
    tags
  }
`;

export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    excerpt,
    content,
    author,
    featuredImage,
    publishedAt,
    tags,
    metaTitle,
    metaDescription,
    "relatedProducts": relatedProducts[]->{
      _id,
      title,
      slug,
      thumbnail
    },
    "relatedApplications": relatedApplications[]->{
      _id,
      title,
      slug,
      badge
    }
  }
`;

export const blogPostsByCategoryQuery = `
  *[_type == "blogPost" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    excerpt,
    featuredImage,
    author,
    publishedAt,
    tags
  }
`;

// ---------- INDUSTRIES ----------

export const allIndustriesQuery = `
  *[_type == "industry"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    icon,
    color
  }
`;

// ---------- CATEGORIES ----------

export const allCategoriesQuery = `
  *[_type == "category" && !defined(parentCategory)] | order(title asc) {
    _id,
    title,
    slug,
    icon,
    heroImage,
    "productCount": count(*[_type == "product" && references(^._id)]),
    "subcategories": *[_type == "category" && parentCategory._ref == ^._id] | order(title asc) {
      _id,
      title,
      slug,
      icon,
      "productCount": count(*[_type == "product" && references(^._id)])
    }
  }
`;

// ---------- STATS ----------

export const totalCountsQuery = `
  {
    "products": count(*[_type == "product"]),
    "parts": count(*[_type == "part"]),
    "applications": count(*[_type == "application"]),
    "blogPosts": count(*[_type == "blogPost"]),
    "industries": count(*[_type == "industry"]),
    "categories": count(*[_type == "category"])
  }
`;

// ---------- SLUG QUERIES (for static paths) ----------

export const productSlugsQuery = `
  *[_type == "product" && defined(slug.current)][].slug.current
`;

export const partSlugsQuery = `
  *[_type == "part" && defined(slug.current)][].slug.current
`;

export const applicationSlugsQuery = `
  *[_type == "application" && defined(slug.current)][].slug.current
`;

export const blogPostSlugsQuery = `
  *[_type == "blogPost" && defined(slug.current)][].slug.current
`;
