import { sql } from "drizzle-orm";
import {
  boolean,
  datetime,
  decimal,
  index,
  int,
  mediumtext,
  mysqlEnum,
  mysqlTable,
  primaryKey,
  text,
  tinyint,
  tinytext,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";

export const activity = mysqlTable(
  "activity",
  {
    activityId: int("activity_id").autoincrement().notNull(),
    title: text("title"),
    activityParentId: int("activity_parent_id"),
    postId: int("post_id"),
    activityAction: varchar("activity_action", { length: 200 }),
    activity: varchar("activity", { length: 200 }),
    userIdDoer: int("user_id_doer"),
    userIdReciver: int("user_id_reciver"),
    status: varchar("status", { length: 200 }),
    date: text("date"),
    ip: text("ip"),
  },
  (table) => {
    return {
      activityActivityId: primaryKey({
        columns: [table.activityId],
        name: "activity_activity_id",
      }),
    };
  }
);

export const addDealCommentInARow = mysqlTable(
  "add_deal_comment_in_a_row",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    visit: int("visit").notNull(),
    date: text("date").notNull(),
    datetime: text("datetime").notNull(),
  },
  (table) => {
    return {
      addDealCommentInARowId: primaryKey({
        columns: [table.id],
        name: "add_deal_comment_in_a_row_id",
      }),
    };
  }
);

export const addDealInRow = mysqlTable(
  "add_deal_in_row",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    visit: int("visit").notNull(),
    date: text("date").notNull(),
    datetime: text("datetime").notNull(),
  },
  (table) => {
    return {
      addDealInRowId: primaryKey({
        columns: [table.id],
        name: "add_deal_in_row_id",
      }),
    };
  }
);

export const adsense = mysqlTable(
  "adsense",
  {
    id: int("id").autoincrement().notNull(),
    showText: int("show_text").notNull(),
    showHeading: int("show_heading").notNull(),
    link: text("link").notNull(),
    endDate: datetime("end_date", { mode: "string" }).notNull(),
    desktopBanner: text("desktop_banner").notNull(),
    mobileBanner: text("mobile_banner").notNull(),
    headline: text("headline").notNull(),
    buttonText: text("button_text").notNull(),
    position: int("position").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      adsenseId: primaryKey({ columns: [table.id], name: "adsense_id" }),
    };
  }
);

export const adsenseBanner = mysqlTable(
  "adsense_banner",
  {
    id: int("id").autoincrement().notNull(),
    banner: text("banner").notNull(),
  },
  (table) => {
    return {
      adsenseBannerId: primaryKey({
        columns: [table.id],
        name: "adsense_banner_id",
      }),
    };
  }
);

export const affiliateNetworks = mysqlTable(
  "affiliate_networks",
  {
    id: int("id").autoincrement().notNull(),
    networkId: text("network_id").notNull(),
    programName: text("programName").notNull(),
    programId: int("programId").notNull(),
    sourceName: text("sourceName").notNull(),
    sourceId: int("sourceId").notNull(),
    eventName: text("eventName").notNull(),
    eventId: int("eventId").notNull(),
    timeOfTransaction: datetime("timeOfTransaction", {
      mode: "string",
    }).notNull(),
    orderValue: text("orderValue").notNull(),
    productName: text("productName").notNull(),
    productId: text("productID").notNull(),
    quantity: int("quantity").notNull(),
    productValue: text("productValue").notNull(),
    productGroup: text("productGroup").notNull(),
    commission: decimal("commission", { precision: 10, scale: 3 }).notNull(),
    commissionId: text("commissionId").notNull(),
    epi: text("epi").notNull(),
    status: text("status").notNull(),
    paid: text("paid").notNull(),
    adId: text("adId").notNull(),
    advertisername: text("advertisername").notNull(),
    actionType: text("action_type").notNull(),
    trackername: text("trackername").notNull(),
    newcommissionid: text("newcommissionid").notNull(),
    advistiserId: int("advistiser_id").notNull(),
  },
  (table) => {
    return {
      affiliateNetworksId: primaryKey({
        columns: [table.id],
        name: "affiliate_networks_id",
      }),
    };
  }
);

export const alertsFeed = mysqlTable(
  "alerts_feed",
  {
    id: int("id").autoincrement().notNull(),
    tagId: int("tag_id").notNull(),
    userId: int("user_id").notNull(),
    receiveEmail: int("receive_email").notNull(),
    alteredTagName: text("altered_tag_name"),
    date: datetime("date", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      alertsFeedId: primaryKey({ columns: [table.id], name: "alerts_feed_id" }),
    };
  }
);

export const attributes = mysqlTable(
  "attributes",
  {
    id: int("id").autoincrement().notNull(),
    attributeTitle: text("attribute_title").notNull(),
    attributeType: int("attribute_type").notNull(),
    date: datetime("date", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      attributesId: primaryKey({ columns: [table.id], name: "attributes_id" }),
    };
  }
);

export const attributesSets = mysqlTable(
  "attributes_sets",
  {
    id: int("id").autoincrement().notNull(),
    setTitle: text("set_title").notNull(),
    date: datetime("date", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      attributesSetsId: primaryKey({
        columns: [table.id],
        name: "attributes_sets_id",
      }),
    };
  }
);

export const attributesSetsToAttributes = mysqlTable(
  "attributes_sets_to_attributes",
  {
    id: int("id").autoincrement().notNull(),
    attributeSetId: int("attribute_set_id").notNull(),
    attributeType: int("attribute_type").notNull(),
    attributeSetTitle: text("attribute_set_title").notNull(),
  },
  (table) => {
    return {
      attributesSetsToAttributesId: primaryKey({
        columns: [table.id],
        name: "attributes_sets_to_attributes_id",
      }),
    };
  }
);

export const attributesTypes = mysqlTable(
  "attributes_types",
  {
    id: int("id").autoincrement().notNull(),
    attributeId: int("attribute_id").notNull(),
    optionLabel: text("option_label").notNull(),
    attributeType: int("attribute_type").notNull(),
  },
  (table) => {
    return {
      attributesTypesId: primaryKey({
        columns: [table.id],
        name: "attributes_types_id",
      }),
    };
  }
);

export const badgesIcons = mysqlTable(
  "badges_icons",
  {
    id: int("id").autoincrement().notNull(),
    iconFileName: text("icon_file_name").notNull(),
    iconName: text("icon_name").notNull(),
  },
  (table) => {
    return {
      badgesIconsId: primaryKey({
        columns: [table.id],
        name: "badges_icons_id",
      }),
    };
  }
);

export const bannerClickshistory = mysqlTable(
  "banner_clickshistory",
  {
    id: int("id").autoincrement().notNull(),
    bannerId: int("banner_id").notNull(),
    bannerType: text("banner_type").notNull(),
    userId: int("user_id").notNull(),
    redirectedUrl: text("redirected_url").notNull(),
    ip: text("ip").notNull(),
    added: datetime("added", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      bannerClickshistoryId: primaryKey({
        columns: [table.id],
        name: "banner_clickshistory_id",
      }),
    };
  }
);

export const blogClicks = mysqlTable(
  "blog_clicks",
  {
    clickId: int("click_id").autoincrement().notNull(),
    clickRef: varchar("click_ref", { length: 255 }).notNull(),
    userId: int("user_id").notNull(),
    blogId: int("blog_id").notNull(),
    blog: varchar("blog", { length: 255 }).notNull(),
    clickIp: varchar("click_ip", { length: 255 }).notNull(),
    added: datetime("added", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      blogClicksClickId: primaryKey({
        columns: [table.clickId],
        name: "blog_clicks_click_id",
      }),
    };
  }
);

export const blogImages = mysqlTable(
  "blog_images",
  {
    id: int("id").autoincrement().notNull(),
    orderNumber: int("order_number").notNull(),
    userId: int("user_id").notNull(),
    images: text("images").notNull(),
  },
  (table) => {
    return {
      blogImagesId: primaryKey({ columns: [table.id], name: "blog_images_id" }),
    };
  }
);

export const blogToBlogCategories = mysqlTable(
  "blog_to_blog_categories",
  {
    id: int("id").autoincrement().notNull(),
    blogId: int("blog_id").notNull(),
    categoryId: int("category_id").notNull(),
  },
  (table) => {
    return {
      blogToBlogCategoriesId: primaryKey({
        columns: [table.id],
        name: "blog_to_blog_categories_id",
      }),
    };
  }
);

export const blogs = mysqlTable(
  "blogs",
  {
    blogId: int("blog_id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    title: text("title").notNull(),
    newTitle: text("new_title").notNull(),
    pricerunner: text("pricerunner").notNull(),
    slug: text("slug").notNull(),
    assignDeals: text("assign_deals").notNull(),
    description: text("description").notNull(),
    description2: text("description_2").notNull(),
    description3: text("description_3").notNull(),
    metaDescription: text("meta_description").notNull(),
    categoryId: int("category_id").notNull(),
    added: datetime("added", { mode: "string" }),
    checkedDate: datetime("checked_date", { mode: "string" }).notNull(),
    updatedDate: datetime("updated_date", { mode: "string" }).notNull(),
    visits: int("visits").notNull(),
    status: text("status").notNull(),
    featuredBlog: int("featured_blog").notNull(),
    positionDealsPr: int("position_deals_pr").notNull(),
    new: text("new").notNull(),
    embedVideo: text("embed_video"),
  },
  (table) => {
    return {
      blogsBlogId: primaryKey({
        columns: [table.blogId],
        name: "blogs_blog_id",
      }),
    };
  }
);

export const specificBlogs = mysqlTable(
  "specific_blogs",
  {
    blogId: int("blog_id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    title: text("title").notNull(),
    newTitle: text("new_title").notNull(),
    pricerunner: text("pricerunner").notNull(),
    slug: text("slug").notNull(),
    assignDeals: text("assign_deals").notNull(),
    description: text("description").notNull(),
    description2: text("description_2").notNull(),
    description3: text("description_3").notNull(),
    metaDescription: text("meta_description").notNull(),
    categoryId: int("category_id").notNull(),
    added: datetime("added", { mode: "string" }),
    checkedDate: datetime("checked_date", { mode: "string" }).notNull(),
    updatedDate: datetime("updated_date", { mode: "string" }).notNull(),
    visits: int("visits").notNull(),
    status: text("status").notNull(),
    featuredBlog: int("featured_blog").notNull(),
    positionDealsPr: int("position_deals_pr").notNull(),
    new: text("new").notNull(),
    embedVideo: text("embed_video"),
  },
  (table) => {
    return {
      blogsBlogId: primaryKey({
        columns: [table.blogId],
        name: "specific_blogs_blog_id",
      }),
    };
  }
);

export const blogsCategories = mysqlTable(
  "blogs_categories",
  {
    categoryId: int("category_id").autoincrement().notNull(),
    icon: int("icon").notNull(),
    description: text("description").notNull(),
    categoryName: text("category_name").notNull(),
    categorySlug: text("category_slug").notNull(),
    metaDescription: text("meta_description").notNull(),
    metaKeywords: text("meta_keywords").notNull(),
    sortOrder: int("sort_order").notNull(),
  },
  (table) => {
    return {
      blogsCategoriesCategoryId: primaryKey({
        columns: [table.categoryId],
        name: "blogs_categories_category_id",
      }),
    };
  }
);

export const brands = mysqlTable(
  "brands",
  {
    brandId: int("brand_id", { unsigned: true }).autoincrement().notNull(),
    parentId: int("parent_id").default(0).notNull(),
    name: varchar("name", { length: 50 }).default("").notNull(),
    tagLine: mediumtext("tag_line").notNull(),
    icon: varchar("icon", { length: 100 }).default("").notNull(),
    img: varchar("img", { length: 100 }).default("").notNull(),
    shortDescription: mediumtext("short_description").notNull(),
    address: mediumtext("address").notNull(),
    website: mediumtext("website").notNull(),
    phone: mediumtext("phone").notNull(),
    multiImage: mediumtext("multi_image").notNull(),
    description: mediumtext("description"),
    categoryUrl: varchar("category_url", { length: 100 }).default("").notNull(),
    metaDescription: varchar("meta_description", { length: 255 })
      .default("")
      .notNull(),
    metaKeywords: varchar("meta_keywords", { length: 255 })
      .default("")
      .notNull(),
    sortOrder: tinyint("sort_order").default(0).notNull(),
    added: datetime("added", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      name: index("idx_brands_name").on(table.name),
      brandsBrandId: primaryKey({
        columns: [table.brandId],
        name: "brands_brand_id",
      }),
    };
  }
);

export const cashbackengineAdminUsers = mysqlTable(
  "cashbackengine_admin_users",
  {
    userId: int("user_id", { unsigned: true }).autoincrement().notNull(),
    username: varchar("username", { length: 70 }).default("").notNull(),
    fbUseremail: varchar("fb_useremail", { length: 100 }).notNull(),
    gUseremail: varchar("g_useremail", { length: 100 }).notNull(),
    password: varchar("password", { length: 32 }).default("").notNull(),
    role: int("role").notNull(),
    email: varchar("email", { length: 100 }).default("").notNull(),
    fname: varchar("fname", { length: 32 }).default("").notNull(),
    lname: varchar("lname", { length: 25 }).default("").notNull(),
    gender: varchar("gender", { length: 10 }).default("").notNull(),
    address: varchar("address", { length: 32 }).default("").notNull(),
    address2: varchar("address2", { length: 70 }).default("").notNull(),
    city: varchar("city", { length: 50 }).default("").notNull(),
    state: varchar("state", { length: 50 }).default("").notNull(),
    zip: varchar("zip", { length: 10 }).default("").notNull(),
    country: int("country").default(0).notNull(),
    phone: varchar("phone", { length: 20 }).default("").notNull(),
    paymentMethod: varchar("payment_method", { length: 50 })
      .default("")
      .notNull(),
    regSource: varchar("reg_source", { length: 100 }).default("").notNull(),
    refClicks: int("ref_clicks", { unsigned: true }).default(0).notNull(),
    refId: int("ref_id", { unsigned: true }).default(0).notNull(),
    refBonus: tinyint("ref_bonus").default(0).notNull(),
    newsletter: tinyint("newsletter").default(0).notNull(),
    ip: varchar("ip", { length: 15 }).default("").notNull(),
    status: mysqlEnum("status", ["active", "inactive"])
      .default("active")
      .notNull(),
    authProvider: varchar("auth_provider", { length: 100 })
      .default("")
      .notNull(),
    authUid: varchar("auth_uid", { length: 50 }).default("").notNull(),
    activationKey: varchar("activation_key", { length: 100 })
      .default("")
      .notNull(),
    unsubscribeKey: varchar("unsubscribe_key", { length: 100 })
      .default("")
      .notNull(),
    loginSession: varchar("login_session", { length: 255 })
      .default("")
      .notNull(),
    lastLogin: datetime("last_login", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    loginCount: int("login_count", { unsigned: true }).default(0).notNull(),
    lastIp: varchar("last_ip", { length: 15 }).default("").notNull(),
    created: datetime("created", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    blockReason: text("block_reason"),
    aboutAuthor: text("about_author").notNull(),
  },
  (table) => {
    return {
      cashbackengineAdminUsersUserId: primaryKey({
        columns: [table.userId],
        name: "cashbackengine_admin_users_user_id",
      }),
    };
  }
);

export const cashbackengineAffnetworks = mysqlTable(
  "cashbackengine_affnetworks",
  {
    networkId: int("network_id", { unsigned: true }).autoincrement().notNull(),
    networkName: varchar("network_name", { length: 255 }).default("").notNull(),
    website: varchar("website", { length: 255 }).default("").notNull(),
    image: varchar("image", { length: 100 }).default("").notNull(),
    subid: varchar("subid", { length: 50 }).default("").notNull(),
    csvFormat: mediumtext("csv_format").notNull(),
    confirmeds: varchar("confirmeds", { length: 100 }).default("").notNull(),
    pendings: varchar("pendings", { length: 100 }).default("").notNull(),
    declineds: varchar("declineds", { length: 100 }).default("").notNull(),
    status: mysqlEnum("status", ["active", "inactive"])
      .default("active")
      .notNull(),
    added: datetime("added", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    lastCsvUpload: datetime("last_csv_upload", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    lastCashbackUpdate: datetime("last_cashback_update", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineAffnetworksNetworkId: primaryKey({
        columns: [table.networkId],
        name: "cashbackengine_affnetworks_network_id",
      }),
    };
  }
);

export const cashbackengineBlogComments = mysqlTable(
  "cashbackengine_blog_comments",
  {
    commentId: int("comment_id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    blogId: int("blog_id").notNull(),
    commentType: text("comment_type").notNull(),
    comment: tinytext("comment").notNull(),
    added: text("added").notNull(),
    ip: text("ip").notNull(),
    visits: int("visits").notNull(),
  },
  (table) => {
    return {
      cashbackengineBlogCommentsCommentId: primaryKey({
        columns: [table.commentId],
        name: "cashbackengine_blog_comments_comment_id",
      }),
    };
  }
);

export const cashbackengineBlogCommentsLikes = mysqlTable(
  "cashbackengine_blog_comments_likes",
  {
    likeId: int("like_id").autoincrement(),
    userId: int("user_id").notNull(),
    commentId: int("comment_id"),
    blogId: int("blog_id").notNull(),
    blog: int("blog"),
    likeIp: text("like_ip"),
    added: text("added"),
    clickRef: int("click_ref"),
  },
  (table) => {
    return {
      cashbackengineBlogCommentsLikesLikeId: primaryKey({
        columns: [table.likeId],
        name: "cashbackengine_blog_comments_likes_like_id",
      }),
    };
  }
);

export const cashbackengineBlogCommentsReply = mysqlTable(
  "cashbackengine_blog_comments_reply",
  {
    replyId: int("reply_id").autoincrement().notNull(),
    commentId: int("comment_id").notNull(),
    blogId: int("blog_id").notNull(),
    replyType: int("reply_type").notNull(),
    reply: text("reply").notNull(),
    added: text("added").notNull(),
    ip: text("ip").notNull(),
    userId: int("user_id").notNull(),
  },
  (table) => {
    return {
      cashbackengineBlogCommentsReplyReplyId: primaryKey({
        columns: [table.replyId],
        name: "cashbackengine_blog_comments_reply_reply_id",
      }),
    };
  }
);

export const cashbackengineBlogReplyLike = mysqlTable(
  "cashbackengine_blog_reply_like",
  {
    replyLikeId: int("reply_like_id").autoincrement(),
    userId: int("user_id"),
    replyId: int("reply_id"),
    commentId: int("comment_id"),
    blogId: int("blog_id"),
    likeIp: text("like_ip"),
    added: text("added"),
    clickRef: int("click_ref"),
  },
  (table) => {
    return {
      cashbackengineBlogReplyLikeReplyLikeId: primaryKey({
        columns: [table.replyLikeId],
        name: "cashbackengine_blog_reply_like_reply_like_id",
      }),
    };
  }
);

export const cashbackengineBlogsComments = mysqlTable(
  "cashbackengine_blogs_comments",
  {
    commentId: int("comment_id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    blogId: int("blog_id").notNull(),
    commentType: text("comment_type").notNull(),
    comment: text("comment").notNull(),
    added: text("added").notNull(),
    ip: text("ip").notNull(),
    visits: int("visits").notNull(),
  },
  (table) => {
    return {
      cashbackengineBlogsCommentsCommentId: primaryKey({
        columns: [table.commentId],
        name: "cashbackengine_blogs_comments_comment_id",
      }),
    };
  }
);

export const cashbackengineBlogsToCategory = mysqlTable(
  "cashbackengine_blogs_to_category",
  {
    id: int("id").autoincrement().notNull(),
    blogId: int("blog_id").notNull(),
    categoryId: int("category_id").notNull(),
  },
  (table) => {
    return {
      cashbackengineBlogsToCategoryId: primaryKey({
        columns: [table.id],
        name: "cashbackengine_blogs_to_category_id",
      }),
    };
  }
);

export const cashbackengineCategories = mysqlTable(
  "cashbackengine_categories",
  {
    categoryId: int("category_id", { unsigned: true })
      .autoincrement()
      .notNull(),
    parentId: int("parent_id").default(0).notNull(),
    name: varchar("name", { length: 50 }).default("").notNull(),
    icon: varchar("icon", { length: 100 }).default("").notNull(),
    img: varchar("img", { length: 100 }).default("").notNull(),
    description: mediumtext("description"),
    categoryUrl: varchar("category_url", { length: 100 }).default("").notNull(),
    metaDescription: varchar("meta_description", { length: 255 })
      .default("")
      .notNull(),
    metaKeywords: varchar("meta_keywords", { length: 255 })
      .default("")
      .notNull(),
    sortOrder: tinyint("sort_order").default(0).notNull(),
    added: datetime("added", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      name: index("idx_categories_name").on(table.name),
      cashbackengineCategoriesCategoryId: primaryKey({
        columns: [table.categoryId],
        name: "cashbackengine_categories_category_id",
      }),
    };
  }
);

export const cashbackengineClickhistory = mysqlTable(
  "cashbackengine_clickhistory",
  {
    clickId: int("click_id", { unsigned: true }).autoincrement().notNull(),
    clickRef: varchar("click_ref", { length: 50 }).default("").notNull(),
    userId: int("user_id", { unsigned: true }).default(0).notNull(),
    retailerId: int("retailer_id", { unsigned: true }).default(0).notNull(),
    retailer: varchar("retailer", { length: 255 }).default("").notNull(),
    clickIp: varchar("click_ip", { length: 15 }).default("").notNull(),
    page: text("page").notNull(),
    added: datetime("added", { mode: "string" }).notNull(),
    app: tinyint("app").default(0).notNull(),
  },
  (table) => {
    return {
      cashbackengineClickhistory: index("cashbackengine_clickhistory").on(
        table.userId
      ),
      cashbackengineClickhistoryClickId: primaryKey({
        columns: [table.clickId],
        name: "cashbackengine_clickhistory_click_id",
      }),
    };
  }
);

export const cashbackengineContent = mysqlTable(
  "cashbackengine_content",
  {
    contentId: int("content_id", { unsigned: true }).autoincrement().notNull(),
    language: varchar("language", { length: 50 }).default("").notNull(),
    name: varchar("name", { length: 50 }).default("").notNull(),
    linkTitle: varchar("link_title", { length: 100 }).default("").notNull(),
    title: varchar("title", { length: 255 }).default("").notNull(),
    description: mediumtext("description"),
    pageLocation: varchar("page_location", { length: 10 })
      .default("")
      .notNull(),
    pageUrl: varchar("page_url", { length: 255 }).default("").notNull(),
    metaDescription: varchar("meta_description", { length: 255 })
      .default("")
      .notNull(),
    metaKeywords: varchar("meta_keywords", { length: 255 })
      .default("")
      .notNull(),
    status: mysqlEnum("status", ["active", "inactive"])
      .default("active")
      .notNull(),
    modified: datetime("modified", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineContentContentId: primaryKey({
        columns: [table.contentId],
        name: "cashbackengine_content_content_id",
      }),
    };
  }
);

export const cashbackengineCountries = mysqlTable(
  "cashbackengine_countries",
  {
    countryId: int("country_id").autoincrement().notNull(),
    code: varchar("code", { length: 2 }).default("").notNull(),
    name: varchar("name", { length: 100 }).default("").notNull(),
    currency: varchar("currency", { length: 3 }).default("").notNull(),
    signup: tinyint("signup").default(1).notNull(),
    sortOrder: tinyint("sort_order").default(0).notNull(),
    status: mysqlEnum("status", ["active", "inactive"])
      .default("active")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineCountriesCountryId: primaryKey({
        columns: [table.countryId],
        name: "cashbackengine_countries_country_id",
      }),
    };
  }
);

export const cashbackengineCoupons = mysqlTable(
  "cashbackengine_coupons",
  {
    couponId: int("coupon_id", { unsigned: true }).autoincrement().notNull(),
    retailerId: int("retailer_id").default(0).notNull(),
    userId: int("user_id").default(0).notNull(),
    couponType: varchar("coupon_type", { length: 10 }).default("").notNull(),
    title: varchar("title", { length: 255 }).default("").notNull(),
    code: varchar("code", { length: 255 }).default("").notNull(),
    link: varchar("link", { length: 255 }).default("").notNull(),
    startDate: datetime("start_date", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    endDate: datetime("end_date", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    description: mediumtext("description"),
    exclusive: tinyint("exclusive").default(0).notNull(),
    likes: int("likes").default(0).notNull(),
    visitsToday: int("visits_today").default(0).notNull(),
    visits: int("visits").default(0).notNull(),
    sortOrder: tinyint("sort_order").default(0).notNull(),
    viewed: tinyint("viewed").default(1).notNull(),
    status: mysqlEnum("status", ["active", "inactive", "expired"])
      .default("active")
      .notNull(),
    added: datetime("added", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    lastVisit: datetime("last_visit", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineCouponsCouponId: primaryKey({
        columns: [table.couponId],
        name: "cashbackengine_coupons_coupon_id",
      }),
    };
  }
);

export const cashbackengineDiscussionComments = mysqlTable(
  "cashbackengine_discussion_comments",
  {
    commentId: int("comment_id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    username: text("username").notNull(),
    userWhoPosted: text("user_who_posted").notNull(),
    discussionId: int("discussion_id").notNull(),
    commentType: text("comment_type").notNull(),
    comment: text("comment").notNull(),
    added: text("added").notNull(),
    ip: text("ip").notNull(),
    visits: int("visits").notNull(),
  },
  (table) => {
    return {
      cashbackengineDiscussionCommentsCommentId: primaryKey({
        columns: [table.commentId],
        name: "cashbackengine_discussion_comments_comment_id",
      }),
    };
  }
);

export const cashbackengineDiscussionCommentsLikes = mysqlTable(
  "cashbackengine_discussion_comments_likes",
  {
    likeId: int("like_id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    commentId: int("comment_id").notNull(),
    discussionId: int("discussion_id").notNull(),
    discussion: int("discussion"),
    likeIp: text("like_ip"),
    added: text("added").notNull(),
    clickRef: int("click_ref"),
  },
  (table) => {
    return {
      cashbackengineDiscussionCommentsLikesLikeId: primaryKey({
        columns: [table.likeId],
        name: "cashbackengine_discussion_comments_likes_like_id",
      }),
    };
  }
);

export const cashbackengineDiscussionCommentsReply = mysqlTable(
  "cashbackengine_discussion_comments_reply",
  {
    replyId: int("reply_id").autoincrement().notNull(),
    commentId: int("comment_id").notNull(),
    discussionId: int("discussion_id").notNull(),
    replyType: int("reply_type").notNull(),
    reply: text("reply").notNull(),
    added: text("added").notNull(),
    ip: text("ip").notNull(),
    userId: int("user_id").notNull(),
  },
  (table) => {
    return {
      cashbackengineDiscussionCommentsReplyReplyId: primaryKey({
        columns: [table.replyId],
        name: "cashbackengine_discussion_comments_reply_reply_id",
      }),
    };
  }
);

export const cashbackengineDiscussionReplyLike = mysqlTable(
  "cashbackengine_discussion_reply_like",
  {
    replyLikeId: int("reply_like_id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    replyId: int("reply_id").notNull(),
    commentId: int("comment_id").notNull(),
    discussionId: int("discussion_id").notNull(),
    likeIp: text("like_ip"),
    added: text("added").notNull(),
    clickRef: int("click_ref"),
  },
  (table) => {
    return {
      cashbackengineDiscussionReplyLikeReplyLikeId: primaryKey({
        columns: [table.replyLikeId],
        name: "cashbackengine_discussion_reply_like_reply_like_id",
      }),
    };
  }
);

export const cashbackengineDiscussionToCategory = mysqlTable(
  "cashbackengine_discussion_to_category",
  {
    id: int("id").autoincrement().notNull(),
    discussionId: int("discussion_id").notNull(),
    categoryId: int("category_id").notNull(),
  },
  (table) => {
    return {
      cashbackengineDiscussionToCategoryId: primaryKey({
        columns: [table.id],
        name: "cashbackengine_discussion_to_category_id",
      }),
    };
  }
);

export const cashbackengineEmailTemplates = mysqlTable(
  "cashbackengine_email_templates",
  {
    templateId: int("template_id", { unsigned: true })
      .autoincrement()
      .notNull(),
    language: varchar("language", { length: 50 }).default("").notNull(),
    emailName: varchar("email_name", { length: 50 }).default("").notNull(),
    emailSubject: varchar("email_subject", { length: 255 })
      .default("")
      .notNull(),
    emailMessage: mediumtext("email_message"),
    modified: datetime("modified", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineEmailTemplatesTemplateId: primaryKey({
        columns: [table.templateId],
        name: "cashbackengine_email_templates_template_id",
      }),
    };
  }
);

export const cashbackengineFavorites = mysqlTable(
  "cashbackengine_favorites",
  {
    favoriteId: int("favorite_id", { unsigned: true })
      .autoincrement()
      .notNull(),
    userId: int("user_id", { unsigned: true }).default(0).notNull(),
    retailerId: int("retailer_id", { unsigned: true }).default(0).notNull(),
    added: datetime("added", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineFavoritesFavoriteId: primaryKey({
        columns: [table.favoriteId],
        name: "cashbackengine_favorites_favorite_id",
      }),
    };
  }
);

export const cashbackengineInvitations = mysqlTable(
  "cashbackengine_invitations",
  {
    invitationId: int("invitation_id", { unsigned: true })
      .autoincrement()
      .notNull(),
    userId: int("user_id").default(0).notNull(),
    recipients: mediumtext("recipients"),
    message: mediumtext("message"),
    sentDate: datetime("sent_date", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineInvitationsInvitationId: primaryKey({
        columns: [table.invitationId],
        name: "cashbackengine_invitations_invitation_id",
      }),
    };
  }
);

export const cashbackengineLanguages = mysqlTable(
  "cashbackengine_languages",
  {
    languageId: int("language_id").autoincrement().notNull(),
    languageCode: varchar("language_code", { length: 2 }).default("").notNull(),
    language: varchar("language", { length: 100 }).default("").notNull(),
    currency: varchar("currency", { length: 3 }).default("").notNull(),
    sortOrder: tinyint("sort_order").default(0).notNull(),
    status: mysqlEnum("status", ["active", "inactive"])
      .default("active")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineLanguagesLanguageId: primaryKey({
        columns: [table.languageId],
        name: "cashbackengine_languages_language_id",
      }),
    };
  }
);

export const cashbackengineMessages = mysqlTable(
  "cashbackengine_messages",
  {
    messageId: int("message_id", { unsigned: true }).autoincrement().notNull(),
    userId: int("user_id").default(0).notNull(),
    isAdmin: tinyint("is_admin").default(0).notNull(),
    subject: varchar("subject", { length: 100 }).default("").notNull(),
    message: mediumtext("message"),
    viewed: tinyint("viewed").default(0).notNull(),
    status: mysqlEnum("status", ["new", "replied", "closed"])
      .default("new")
      .notNull(),
    created: datetime("created", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineMessagesMessageId: primaryKey({
        columns: [table.messageId],
        name: "cashbackengine_messages_message_id",
      }),
    };
  }
);

export const cashbackengineMessagesAnswers = mysqlTable(
  "cashbackengine_messages_answers",
  {
    answerId: int("answer_id", { unsigned: true }).autoincrement().notNull(),
    messageId: int("message_id").default(0).notNull(),
    userId: int("user_id").default(0).notNull(),
    isAdmin: tinyint("is_admin").default(0).notNull(),
    answer: mediumtext("answer"),
    viewed: tinyint("viewed").default(0).notNull(),
    answerDate: datetime("answer_date", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineMessagesAnswersAnswerId: primaryKey({
        columns: [table.answerId],
        name: "cashbackengine_messages_answers_answer_id",
      }),
    };
  }
);

export const cashbackengineNews = mysqlTable(
  "cashbackengine_news",
  {
    newsId: int("news_id", { unsigned: true }).autoincrement().notNull(),
    newsTitle: varchar("news_title", { length: 255 }).default("").notNull(),
    newsDescription: mediumtext("news_description"),
    status: mysqlEnum("status", ["active", "inactive"])
      .default("active")
      .notNull(),
    added: datetime("added", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineNewsNewsId: primaryKey({
        columns: [table.newsId],
        name: "cashbackengine_news_news_id",
      }),
    };
  }
);

export const cashbackenginePmethods = mysqlTable(
  "cashbackengine_pmethods",
  {
    pmethodId: int("pmethod_id", { unsigned: true }).autoincrement().notNull(),
    pmethodTitle: varchar("pmethod_title", { length: 100 })
      .default("")
      .notNull(),
    minAmount: decimal("min_amount", { precision: 15, scale: 4 })
      .default("0.0000")
      .notNull(),
    commission: varchar("commission", { length: 10 }).default("").notNull(),
    pmethodDetails: mediumtext("pmethod_details"),
    status: mysqlEnum("status", ["active", "inactive"])
      .default("active")
      .notNull(),
  },
  (table) => {
    return {
      cashbackenginePmethodsPmethodId: primaryKey({
        columns: [table.pmethodId],
        name: "cashbackengine_pmethods_pmethod_id",
      }),
    };
  }
);

export const cashbackengineReports = mysqlTable(
  "cashbackengine_reports",
  {
    reportId: int("report_id", { unsigned: true }).autoincrement().notNull(),
    reporterId: int("reporter_id").default(0).notNull(),
    userId: int("user_id").default(0).notNull(),
    retailerId: int("retailer_id").default(0).notNull(),
    report: mediumtext("report"),
    viewed: tinyint("viewed").default(0).notNull(),
    status: mysqlEnum("status", ["active", "pending", "inactive"])
      .default("pending")
      .notNull(),
    added: datetime("added", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineReportsReportId: primaryKey({
        columns: [table.reportId],
        name: "cashbackengine_reports_report_id",
      }),
    };
  }
);

export const cashbackengineRetailerToBrand = mysqlTable(
  "cashbackengine_retailer_to_brand",
  {
    id: int("id").autoincrement().notNull(),
    retailerId: int("retailer_id", { unsigned: true }).default(0).notNull(),
    brandId: int("brand_id", { unsigned: true }).default(0).notNull(),
  },
  (table) => {
    return {
      cashbackengineRetailerToBrandId: primaryKey({
        columns: [table.id],
        name: "cashbackengine_retailer_to_brand_id",
      }),
    };
  }
);

export const cashbackengineRetailerToCategory = mysqlTable(
  "cashbackengine_retailer_to_category",
  {
    retailerId: int("retailer_id", { unsigned: true }).default(0).notNull(),
    categoryId: int("category_id", { unsigned: true }).default(0).notNull(),
  },
  (table) => {
    return {
      cashbackengineRetailerToCategoryRetailerIdCategoryId: primaryKey({
        columns: [table.retailerId, table.categoryId],
        name: "cashbackengine_retailer_to_category_retailer_id_category_id",
      }),
    };
  }
);

export const cashbackengineRetailerToCountry = mysqlTable(
  "cashbackengine_retailer_to_country",
  {
    retailerId: int("retailer_id", { unsigned: true }).default(0).notNull(),
    countryId: int("country_id", { unsigned: true }).default(0).notNull(),
  },
  (table) => {
    return {
      cashbackengineRetailerToCountryRetailerIdCountryId: primaryKey({
        columns: [table.retailerId, table.countryId],
        name: "cashbackengine_retailer_to_country_retailer_id_country_id",
      }),
    };
  }
);

export const cashbackengineRetailerToStore = mysqlTable(
  "cashbackengine_retailer_to_store",
  {
    id: int("id").autoincrement().notNull(),
    retailerId: int("retailer_id", { unsigned: true }).default(0).notNull(),
    storeId: int("store_id", { unsigned: true }).default(0).notNull(),
  },
  (table) => {
    return {
      cashbackengineRetailerToStoreId: primaryKey({
        columns: [table.id],
        name: "cashbackengine_retailer_to_store_id",
      }),
    };
  }
);

export const cashbackengineRetailerToTag = mysqlTable(
  "cashbackengine_retailer_to_tag",
  {
    id: int("id").autoincrement(),
    retailerId: int("retailer_id").notNull(),
    tagId: int("tag_id").notNull(),
    tagType: text("tag_type"),
    dealStatus: text("deal_status"),
    dealEndDate: datetime("deal_end_date", { mode: "string" }),
  },
  (table) => {
    return {
      cashbackengineRetailerToTagId: primaryKey({
        columns: [table.id],
        name: "cashbackengine_retailer_to_tag_id",
      }),
    };
  }
);

export const cashbackengineRetailers = mysqlTable(
  "cashbackengine_retailers",
  {
    retailerId: int("retailer_id", { unsigned: true })
      .autoincrement()
      .notNull(),
    totalTagsCounting: int("total_tags_counting"),
    pinTagsCounting: int("pin_deal_position"),
    topPicks: int("top_picks"),
    showInDicsountSidebar: int("show_in_dicsount_sidebar"),
    indexUrl: int("index_url"),
    hideBuyButton: int("hide_buy_button"),
    goToSingleDeal: int("go_to_single_deal"),
    onlyLoggedinUser: int("only_loggedin_user"),
    showInFavSidebar: int("show_in_fav_sidebar"),
    addedUpdateBy: text("added_update_by"),
    title: varchar("title", { length: 255 }),
    likes: int("likes"),
    addBadge: text("add_badge"),
    dealsTotalLikes: int("deals_total_likes"),
    clicksOnDeal: int("clicks_on_deal"),
    newTitle: text("new_title"),
    slug: mediumtext("slug"),
    dealStore: mediumtext("deal_store"),
    tellUs: mediumtext("tell_us"),
    schedulePublishDateField: datetime("schedule_publish_date_field", {
      mode: "string",
    }),
    schedulePublishDateCheckbox: int("schedule_publish_date_checkbox"),
    userId: mediumtext("user_id"),
    networkId: int("network_id").default(0),
    programId: varchar("program_id", { length: 255 }).default(""),
    url: varchar("url", { length: 255 }).default("").notNull(),
    affiliateLink: mediumtext("affiliate_link"),
    image: varchar("image", { length: 255 }).default(""),
    oldCashback: varchar("old_cashback", { length: 20 }).default(""),
    cashback: varchar("cashback", { length: 20 }).default(""),
    conditions: mediumtext("conditions"),
    description: mediumtext("description"),
    highlightedText: text("highlighted_text"),
    secondHighlight: text("second_highlight"),
    widget: text("widget"),
    smallWidget: text("small_widget"),
    website: varchar("website", { length: 255 }).default(""),
    retailerUrl: varchar("retailer_url", { length: 255 }).default(""),
    tags: varchar("tags", { length: 255 }).default(""),
    seoTitle: varchar("seo_title", { length: 255 }).default(""),
    tagText: mediumtext("tag_text"),
    tagName: mediumtext("tag_name"),
    tagActive: mediumtext("tag_active"),
    metaDescription: varchar("meta_description", { length: 255 }).default(""),
    metaKeywords: varchar("meta_keywords", { length: 255 }).default(""),
    priceCost: mediumtext("price_cost"),
    endDate: datetime("end_date", { mode: "string" }).default(
      "0000-00-00 00:00:00"
    ),
    freeP: mediumtext("free_p"),
    showPopup: int("show_popup"),
    startDate: datetime("start_date", { mode: "string" }),
    startHours: int("start_hours"),
    startMins: int("start_mins"),
    endHours: int("end_hours"),
    endMins: int("end_mins"),
    featured: tinyint("featured").default(0),
    positionFeatured: int("position_featured").default(0),
    featuredNumber: int("featured_number"),
    dealOfWeek: tinyint("deal_of_week").default(0),
    lastVotedDate: mediumtext("last_voted_date"),
    visits: int("visits").default(0),
    clickHistory: int("click_history"),
    hearts: int("hearts"),
    sortingFeed: text("sorting_feed"),
    sortingFeed2: text("sorting_feed_2"),
    status: mysqlEnum("status", ["active", "inactive", "expired"]).default(
      "active"
    ),
    statusText: text("status_text"),
    added: datetime("added", { mode: "string" }).default("0000-00-00 00:00:00"),
    updatedDate: datetime("updated_date", { mode: "string" }),
    checkedDate: datetime("checked_date", { mode: "string" }),
    dealExpiryDate: mediumtext("deal_expiry_date"),
    discountCheck: int("discount_check"),
    discountType: mediumtext("discount_type"),
    discountPercentage: mediumtext("discount_percentage"),
    discountAmount: mediumtext("discount_amount"),
    showUptoText: int("show_upto_text"),
    hideMainPrice: int("hide_main_price"),
    voucherCode: mediumtext("voucher_code"),
    storeNames: text("store_names"),
    storeSlugs: text("store_slugs"),
    addedByUName: text("added_by_u_name"),
    addedByType: text("added_by_type"),
    avatarId: int("avatar_id"),
    pickerColorInput: text("picker_color_input"),
    avatarImg: text("avatar_img"),
    avatarImageType: text("avatar_image_type"),
    authorName: text("author_name"),
    dealImages: text("deal_images"),
    totalComments: int("total_comments"),
    dealstorenameMainClassic: text("dealstorename_main_classic"),
    storesTagsLinks: text("stores_tags_links"),
    badgeIconSelected: text("badge_icon_selected"),
    badgeColor: text("badge_color"),
    savedDealId: text("saved_deal_id"),
    badgeFontSize: int("badge_font_size"),
    noNaturalExpireDate: int("no_natural_expire_date"),
    actionUpdatedDate: datetime("action_updated_date", { mode: "string" }),
    embedVideo: text("embed_video"),
    displayExpiryDate: int("display_expiry_date"),
  },
  (table) => {
    return {
      cashbackengineRetailers: index("cashbackengine_retailers").on(
        table.userId
      ),
      idxFeaturedEnddateSorting: index("idx_featured_enddate_sorting").on(
        table.featured,
        table.endDate,
        table.sortingFeed
      ),
      cashbackengineRetailersRetailerId: primaryKey({
        columns: [table.retailerId],
        name: "cashbackengine_retailers_retailer_id",
      }),
    };
  }
);

export const cashbackengineReviews = mysqlTable(
  "cashbackengine_reviews",
  {
    reviewId: int("review_id", { unsigned: true }).autoincrement().notNull(),
    retailerId: int("retailer_id").default(0).notNull(),
    userId: int("user_id").default(0).notNull(),
    reviewTitle: varchar("review_title", { length: 255 }).default("").notNull(),
    rating: tinyint("rating").default(0).notNull(),
    review: mediumtext("review"),
    status: mysqlEnum("status", ["active", "pending", "inactive"])
      .default("active")
      .notNull(),
    added: datetime("added", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    updated: datetime("updated", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineReviewsReviewId: primaryKey({
        columns: [table.reviewId],
        name: "cashbackengine_reviews_review_id",
      }),
    };
  }
);

export const cashbackengineSavedDeals = mysqlTable(
  "cashbackengine_saved_deals",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    retailerId: int("retailer_id").notNull(),
    added: datetime("added", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      cashbackengineSavedDealsId: primaryKey({
        columns: [table.id],
        name: "cashbackengine_saved_deals_id",
      }),
    };
  }
);

export const cashbackengineSettings = mysqlTable(
  "cashbackengine_settings",
  {
    settingId: int("setting_id").autoincrement().notNull(),
    settingKey: varchar("setting_key", { length: 50 }).default("").notNull(),
    settingValue: mediumtext("setting_value"),
  },
  (table) => {
    return {
      cashbackengineSettingsSettingId: primaryKey({
        columns: [table.settingId],
        name: "cashbackengine_settings_setting_id",
      }),
    };
  }
);

export const cashbackengineTagClicks = mysqlTable(
  "cashbackengine_tag_clicks",
  {
    id: int("id").autoincrement().notNull(),
    tagId: text("tag_id"),
    userId: text("user_id"),
    ip: text("ip"),
    date: text("date").notNull(),
    datetime: datetime("datetime", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineTagClicksId: primaryKey({
        columns: [table.id],
        name: "cashbackengine_tag_clicks_id",
      }),
    };
  }
);

export const cashbackengineTransactions = mysqlTable(
  "cashbackengine_transactions",
  {
    transactionId: int("transaction_id", { unsigned: true })
      .autoincrement()
      .notNull(),
    referenceId: varchar("reference_id", { length: 50 }).default("").notNull(),
    networkId: int("network_id").default(0).notNull(),
    retailerId: int("retailer_id").default(0).notNull(),
    retailer: varchar("retailer", { length: 100 }).default("").notNull(),
    programId: varchar("program_id", { length: 100 }).default("").notNull(),
    userId: int("user_id").default(0).notNull(),
    refId: int("ref_id").default(0).notNull(),
    paymentType: varchar("payment_type", { length: 50 }).default("").notNull(),
    paymentMethod: int("payment_method").default(0).notNull(),
    paymentDetails: mediumtext("payment_details"),
    transactionAmount: decimal("transaction_amount", {
      precision: 15,
      scale: 4,
    })
      .default("0.0000")
      .notNull(),
    transactionCommision: decimal("transaction_commision", {
      precision: 15,
      scale: 4,
    })
      .default("0.0000")
      .notNull(),
    amount: decimal("amount", { precision: 15, scale: 4 })
      .default("0.0000")
      .notNull(),
    status: varchar("status", { length: 20 }).default("").notNull(),
    reason: mediumtext("reason"),
    notificationSent: tinyint("notification_sent").default(0).notNull(),
    created: datetime("created", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    updated: datetime("updated", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    processDate: datetime("process_date", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      cashbackengineTransactionsTransactionId: primaryKey({
        columns: [table.transactionId],
        name: "cashbackengine_transactions_transaction_id",
      }),
    };
  }
);

export const cashbackengineUsers = mysqlTable(
  "cashbackengine_users",
  {
    userId: int("user_id", { unsigned: true }).autoincrement().notNull(),
    assignAdminUser: int("assign_admin_user").notNull(),
    campaign: text("campaign").notNull(),
    username: varchar("username", { length: 70 }).default("").notNull(),
    totalPostedDeals: int("total_posted_deals").notNull(),
    usernameUser: mediumtext("username_user").notNull(),
    fbUseremail: varchar("fb_useremail", { length: 100 }),
    gUseremail: varchar("g_useremail", { length: 100 }),
    aUseremail: varchar("a_useremail", { length: 100 }),
    password: varchar("password", { length: 32 }).default(""),
    previousUrl: text("previous_url").notNull(),
    email: varchar("email", { length: 100 }).default("").notNull(),
    fname: varchar("fname", { length: 32 }).default("").notNull(),
    uniUsername: mediumtext("uni_username").notNull(),
    changeGeneratedUname: int("change_generated_uname").notNull(),
    lname: varchar("lname", { length: 25 }).default("").notNull(),
    gender: varchar("gender", { length: 10 }).default("").notNull(),
    address: varchar("address", { length: 32 }).default("").notNull(),
    address2: varchar("address2", { length: 70 }).default("").notNull(),
    city: varchar("city", { length: 50 }).default("").notNull(),
    state: varchar("state", { length: 50 }).default("").notNull(),
    zip: varchar("zip", { length: 10 }).default("").notNull(),
    country: int("country").default(0).notNull(),
    phone: varchar("phone", { length: 20 }).default("").notNull(),
    paymentMethod: varchar("payment_method", { length: 50 })
      .default("")
      .notNull(),
    regSource: varchar("reg_source", { length: 100 }).default("").notNull(),
    refClicks: int("ref_clicks", { unsigned: true }).default(0).notNull(),
    refId: int("ref_id", { unsigned: true }).default(0).notNull(),
    refBonus: tinyint("ref_bonus").default(0).notNull(),
    newsletter: tinyint("newsletter").default(0).notNull(),
    ip: varchar("ip", { length: 15 }).default("").notNull(),
    status: mysqlEnum("status", ["active", "inactive"])
      .default("active")
      .notNull(),
    authProvider: varchar("auth_provider", { length: 100 })
      .default("")
      .notNull(),
    authUid: varchar("auth_uid", { length: 50 }).default("").notNull(),
    activationKey: varchar("activation_key", { length: 100 })
      .default("")
      .notNull(),
    unsubscribeKey: varchar("unsubscribe_key", { length: 100 })
      .default("")
      .notNull(),
    loginSession: varchar("login_session", { length: 255 })
      .default("")
      .notNull(),
    lastLogin: datetime("last_login", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    loginCount: int("login_count", { unsigned: true }).default(0).notNull(),
    lastIp: varchar("last_ip", { length: 15 }).default("").notNull(),
    created: datetime("created", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    blockReason: text("block_reason"),
    avatarImage: mediumtext("avatar_image").notNull(),
    pickerColorInput: mediumtext("picker_color_input").notNull(),
    dealsPosted: int("deals_posted").notNull(),
    likedDeals: int("liked_deals").notNull(),
    myDealsLiked: int("my_deals_liked").notNull(),
    clickedOnDeals: int("clicked_on_deals").notNull(),
    aboutAuthor: text("about_author").notNull(),
    deletedAt: datetime("deleted_at", { mode: "string" }),
    receivedReactionPoints: int("received_reaction_points").notNull(),
    points: int("points").default(0).notNull(),
  },
  (table) => {
    return {
      cashbackengineUsers: index("cashbackengine_users").on(table.userId),
      cashbackengineUsersUserId: primaryKey({
        columns: [table.userId],
        name: "cashbackengine_users_user_id",
      }),
    };
  }
);

export const chat = mysqlTable(
  "chat",
  {
    id: int("id").autoincrement().notNull(),
    chatRoomId: int("chat_room_id").notNull(),
    message: text("message").notNull(),
    userId: int("user_id").notNull(),
    senderId: int("sender_id").notNull(),
    receiverId: int("receiver_id").notNull(),
    status: text("status").notNull(),
    createdAt: text("created_at").notNull(),
  },
  (table) => {
    return {
      chatId: primaryKey({ columns: [table.id], name: "chat_id" }),
    };
  }
);

export const chatFiles = mysqlTable(
  "chat_files",
  {
    id: int("id").autoincrement().notNull(),
    messageId: int("message_id").notNull(),
    fileName: text("file_name").notNull(),
    filePath: text("file_path").notNull(),
  },
  (table) => {
    return {
      chatFilesId: primaryKey({ columns: [table.id], name: "chat_files_id" }),
    };
  }
);

export const chatRoom = mysqlTable(
  "chat_room",
  {
    id: int("id").autoincrement().notNull(),
    friendId: int("friend_id").notNull(),
    createdBy: int("created_by").notNull(),
    status: text("status").notNull(),
    roomUpdatedAt: datetime("room_updated_at").notNull(),
    createdAt: text("created_at").notNull(),
  },
  (table) => {
    return {
      chatRoomId: primaryKey({ columns: [table.id], name: "chat_room_id" }),
    };
  }
);

export const clicks = mysqlTable(
  "clicks",
  {
    clickId: int("click_id", { unsigned: true }).autoincrement().notNull(),
    clickBtn: int("click_btn").notNull(),
    likes: text("likes").notNull(),
    userWhoPosted: int("user_who_posted").notNull(),
    clickRef: varchar("click_ref", { length: 50 }).default("").notNull(),
    userId: int("user_id", { unsigned: true }).default(0).notNull(),
    retailerId: int("retailer_id", { unsigned: true }).default(0).notNull(),
    retailer: varchar("retailer", { length: 255 }).default("").notNull(),
    clickIp: varchar("click_ip", { length: 15 }).default("").notNull(),
    added: datetime("added", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      clicks: index("clicks").on(table.userId),
      clicksClickId: primaryKey({
        columns: [table.clickId],
        name: "clicks_click_id",
      }),
    };
  }
);

export const commentReplyAll = mysqlTable(
  "comment_reply_all",
  {
    id: int("id").autoincrement().notNull(),
    typeOfComment: text("type_of_comment"),
    userWhoPosted: int("user_who_posted"),
    addedByAdmin: int("added_by_admin"),
    type: text("type"),
    userId: int("user_id"),
    star: int("star"),
    likes: int("likes"),
    username: varchar("username", { length: 200 }),
    retailerId: int("retailer_id"),
    commentId: int("comment_id"),
    comment: text("comment").notNull(),
    replyId: int("reply_id"),
    visits: int("visits"),
    ip: text("ip"),
    date: datetime("date", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      commentReplyAllId: primaryKey({
        columns: [table.id],
        name: "comment_reply_all_id",
      }),
    };
  }
);

export const comments = mysqlTable(
  "comments",
  {
    commentId: int("comment_id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    username: text("username").notNull(),
    userWhoPosted: text("user_who_posted").notNull(),
    retailerId: int("retailer_id").notNull(),
    commentType: text("comment_type").notNull(),
    comment: text("comment").notNull(),
    added: datetime("added", { mode: "string" }),
    ip: text("ip").notNull(),
    visits: int("visits").notNull(),
    addedByAdmin: int("added_by_admin").notNull(),
  },
  (table) => {
    return {
      comments: index("comments").on(table.userId),
      commentsCommentId: primaryKey({
        columns: [table.commentId],
        name: "comments_comment_id",
      }),
    };
  }
);

export const commentsLike = mysqlTable(
  "comments_like",
  {
    likeId: int("like_id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    commentId: int("comment_id").notNull(),
    retailerId: int("retailer_id").notNull(),
    retailer: int("retailer"),
    likeIp: text("like_ip"),
    added: text("added").notNull(),
    clickRef: int("click_ref"),
  },
  (table) => {
    return {
      commentsLikeLikeId: primaryKey({
        columns: [table.likeId],
        name: "comments_like_like_id",
      }),
    };
  }
);

export const commentsReply = mysqlTable(
  "comments_reply",
  {
    replyId: int("reply_id").autoincrement().notNull(),
    commentId: int("comment_id").notNull(),
    retailerId: int("retailer_id").notNull(),
    replyType: int("reply_type").notNull(),
    reply: text("reply").notNull(),
    added: text("added").notNull(),
    ip: text("ip").notNull(),
    userId: int("user_id").notNull(),
    username: text("username").notNull(),
  },
  (table) => {
    return {
      commentsReplyReplyId: primaryKey({
        columns: [table.replyId],
        name: "comments_reply_reply_id",
      }),
    };
  }
);

export const comunityAds = mysqlTable(
  "comunity_ads",
  {
    id: int("id").autoincrement().notNull(),
    ad: text("ad").notNull(),
    sidebarMobileFeed: text("sidebar_mobile_feed").notNull(),
  },
  (table) => {
    return {
      comunityAdsId: primaryKey({
        columns: [table.id],
        name: "comunity_ads_id",
      }),
    };
  }
);

export const dealbotRuns = mysqlTable(
  "dealbot_runs",
  {
    id: int("id").autoincrement().notNull(),
    version: varchar("version", { length: 25 }).notNull(),
    mode: varchar("mode", { length: 25 }),
    startDate: datetime("start_date", { mode: "string" })
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
    finishDate: datetime("finish_date", { mode: "string" }),
    runTime: int("run_time"),
    foundItems: int("found_items"),
    numError: int("num_error").notNull().default(0),
    numReport: int("num_report").notNull().default(0),
    numUpdate: int("num_update").notNull().default(0),
    numInvalid: int("num_invalid").notNull().default(0),
    num404: int("num_404").notNull().default(0),
    numNoPrice: int("num_no_price").notNull().default(0),
    numRequireBrowser: int("num_require_browser").notNull().default(0),
    numNoResult: int("num_no_result").notNull().default(0),
  },
  (table) => ({
    primaryKey: primaryKey(table.id),
  })
);

export const dealbotRunsDomain = mysqlTable(
  "dealbot_runs_domain",
  {
    id: int("id").autoincrement().notNull(),
    runId: int("run_id").notNull(),
    domain: varchar("domain", { length: 255 }).notNull(),
    version: varchar("version", { length: 25 }).notNull(),
    mode: varchar("mode", { length: 25 }),
    createdAt: datetime("created_at", { mode: "string" })
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
    updatedAt: datetime("updated_at", { mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    runTime: int("run_time"),
    foundItems: int("found_items"),
    numError: int("num_error").notNull().default(0),
    numReport: int("num_report").notNull().default(0),
    numUpdate: int("num_update").notNull().default(0),
    numInvalid: int("num_invalid").notNull().default(0),
    num404: int("num_404").notNull().default(0),
    numNoPrice: int("num_no_price").notNull().default(0),
    numRequireBrowser: int("num_require_browser").notNull().default(0),
    numNoResult: int("num_no_result").notNull().default(0),
  },
  (table) => ({
    primaryKey: primaryKey(table.id),
    uniqueIndex: uniqueIndex("run_id").on(table.runId, table.domain),
  })
);

export const dealsSorting = mysqlTable(
  "deals_sorting",
  {
    id: int("id").autoincrement().notNull(),
    dealId: int("deal_id").notNull(),
    sortingNumber: int("sorting_number").notNull(),
  },
  (table) => {
    return {
      dealsSortingId: primaryKey({
        columns: [table.id],
        name: "deals_sorting_id",
      }),
    };
  }
);

export const discussionCategories = mysqlTable(
  "discussion_categories",
  {
    categoryId: int("category_id").autoincrement().notNull(),
    parentId: int("parent_id").notNull(),
    icon: text("icon").notNull(),
    description: text("description").notNull(),
    categoryName: text("category_name").notNull(),
    slug: text("slug").notNull(),
    metaDescription: varchar("meta_description", { length: 255 }).notNull(),
    metaKeywords: varchar("meta_keywords", { length: 255 }).notNull(),
    sortOrder: int("sort_order").notNull(),
  },
  (table) => {
    return {
      discussionCategoriesCategoryId: primaryKey({
        columns: [table.categoryId],
        name: "discussion_categories_category_id",
      }),
    };
  }
);

export const discussionClicks = mysqlTable(
  "discussion_clicks",
  {
    clickId: int("click_id").autoincrement().notNull(),
    userWhoPosted: int("user_who_posted").notNull(),
    clickRef: varchar("click_ref", { length: 50 }).notNull(),
    userId: int("user_id").notNull(),
    discussionId: int("discussion_id").notNull(),
    discussion: varchar("discussion", { length: 255 }).notNull(),
    clickIp: varchar("click_ip", { length: 15 }).notNull(),
    added: datetime("added", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      discussionClicksClickId: primaryKey({
        columns: [table.clickId],
        name: "discussion_clicks_click_id",
      }),
    };
  }
);

export const discussionToDiscussionCategories = mysqlTable(
  "discussion_to_discussion_categories",
  {
    id: int("id").autoincrement().notNull(),
    discussionId: int("discussion_id").notNull(),
    categoryId: int("category_id").notNull(),
  },
  (table) => {
    return {
      discussionToDiscussionCategoriesId: primaryKey({
        columns: [table.id],
        name: "discussion_to_discussion_categories_id",
      }),
    };
  }
);

export const discussions = mysqlTable(
  "discussions",
  {
    discussionId: int("discussion_id").autoincrement().notNull(),
    featuredDiscussion: int("featured_discussion"),
    userId: int("user_id").notNull(),
    userWhoPosted: text("user_who_posted"),
    title: text("title").notNull(),
    newTitle: text("new_title"),
    slug: text("slug").notNull(),
    description: text("description"),
    metaDescription: text("meta_description"),
    categoryId: int("category_id"),
    added: text("added").notNull(),
    visits: int("visits"),
    totalComments: text("total_comments"),
    status: mysqlEnum("status", ["active", "inactive", "expired"]).default(
      "active"
    ),
  },
  (table) => {
    return {
      discussionsDiscussionId: primaryKey({
        columns: [table.discussionId],
        name: "discussions_discussion_id",
      }),
    };
  }
);

export const faqTags = mysqlTable(
  "faq_tags",
  {
    id: int("id").autoincrement().notNull(),
    tagId: int("tag_id").notNull(),
    faqText: text("faq_text").notNull(),
    faqDescription: text("faq_description").notNull(),
  },
  (table) => {
    return {
      faqTagsId: primaryKey({ columns: [table.id], name: "faq_tags_id" }),
    };
  }
);

export const followers = mysqlTable(
  "followers",
  {
    id: int("id").autoincrement().notNull(),
    loggedInUid: text("logged_in_uid").notNull(),
    followDealUid: text("follow_deal_uid").notNull(),
    followDate: text("follow_date").notNull(),
  },
  (table) => {
    return {
      followersId: primaryKey({ columns: [table.id], name: "followers_id" }),
    };
  }
);

export const friendRequests = mysqlTable(
  "friend_requests",
  {
    id: int("id").autoincrement().notNull(),
    friendRequestSenderId: int("friend_request_sender_id").notNull(),
    friendRequestReciverId: int("friend_request_reciver_id").notNull(),
    status: text("status").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      friendRequestsId: primaryKey({
        columns: [table.id],
        name: "friend_requests_id",
      }),
    };
  }
);

export const headerMainBanners = mysqlTable(
  "header_main_banners",
  {
    id: int("id").autoincrement().notNull(),
    url: text("url").notNull(),
    endDate: datetime("end_date", { mode: "string" }).notNull(),
    banner: text("banner").notNull(),
    sorting: int("sorting").notNull(),
    mobileBanner: text("mobile_banner").notNull(),
  },
  (table) => {
    return {
      headerMainBannersId: primaryKey({
        columns: [table.id],
        name: "header_main_banners_id",
      }),
    };
  }
);

export const headerMainBannersMobile = mysqlTable(
  "header_main_banners_mobile",
  {
    id: int("id").autoincrement().notNull(),
    endDate: datetime("end_date", { mode: "string" }).notNull(),
    banner: text("banner").notNull(),
    url: text("url").notNull(),
    sorting: int("sorting").notNull(),
  },
  (table) => {
    return {
      headerMainBannersMobileId: primaryKey({
        columns: [table.id],
        name: "header_main_banners_mobile_id",
      }),
    };
  }
);

export const hearts = mysqlTable(
  "hearts",
  {
    clickId: int("click_id", { unsigned: true }).autoincrement().notNull(),
    clickRef: varchar("click_ref", { length: 50 }).default("").notNull(),
    userId: int("user_id", { unsigned: true }).default(0).notNull(),
    retailerId: int("retailer_id", { unsigned: true }).default(0).notNull(),
    retailer: varchar("retailer", { length: 255 }).default("").notNull(),
    clickIp: varchar("click_ip", { length: 15 }).default("").notNull(),
    added: datetime("added", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      heartsClickId: primaryKey({
        columns: [table.clickId],
        name: "hearts_click_id",
      }),
    };
  }
);

export const homepageSideBarBanners = mysqlTable(
  "homepage_side_bar_banners",
  {
    id: int("id").autoincrement().notNull(),
    endDate: datetime("end_date", { mode: "string" }).notNull(),
    banner: text("banner").notNull(),
    url: text("url").notNull(),
    sorting: int("sorting").notNull(),
  },
  (table) => {
    return {
      homepageSideBarBannersId: primaryKey({
        columns: [table.id],
        name: "homepage_side_bar_banners_id",
      }),
    };
  }
);

export const homepageSideWidgets = mysqlTable(
  "homepage_side_widgets",
  {
    id: int("id").autoincrement().notNull(),
    title: text("title").notNull(),
    type: text("type").notNull(),
    position: int("position").notNull(),
  },
  (table) => {
    return {
      homepageSideWidgetsId: primaryKey({
        columns: [table.id],
        name: "homepage_side_widgets_id",
      }),
    };
  }
);

export const images = mysqlTable(
  "images",
  {
    id: int("id").autoincrement().notNull(),
    imgName: text("img_name").notNull(),
    imgOrder: text("img_order").notNull(),
    created: text("created").notNull(),
    userId: int("user_id").notNull(),
    modified: text("modified").notNull(),
    status: text("status").notNull(),
  },
  (table) => {
    return {
      imagesId: primaryKey({ columns: [table.id], name: "images_id" }),
    };
  }
);

export const leads = mysqlTable(
  "leads",
  {
    leadId: int("lead_id").autoincrement().notNull(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }),
    source: varchar("source", { length: 255 }).notNull(),
    createdAt: datetime("created_at", { mode: "string" })
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
    updatedAt: datetime("updated_at", { mode: "string" }).default(
      sql`CURRENT_TIMESTAMP`
    ),
    deletedAt: datetime("deleted_at", { mode: "string" }),
    address: varchar("address", { length: 255 }),
    address2: varchar("address2", { length: 255 }),
    city: varchar("city", { length: 255 }),
    state: varchar("state", { length: 255 }),
    country: varchar("country", { length: 255 }),
    phoneno: varchar("phoneno", { length: 255 }),
  },
  (table) => {
    return {
      pk: primaryKey(table.leadId),
      emailIndex: index("email_source_idx").on(table.email, table.source),
    };
  }
);

export const leadsApiKeys = mysqlTable(
  "leads_api_keys",
  {
    leadsApiKeysId: int("leads_api_keys_id").autoincrement().notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    source: varchar("source", { length: 255 }).notNull(),
    enabled: boolean("enabled").notNull().default(false),
    apikey: varchar("apikey", { length: 36 }).notNull(),
  },
  (table) => {
    return {
      pk: primaryKey(table.leadsApiKeysId),
    };
  }
);

export const level = mysqlTable(
  "level",
  {
    id: int("id").autoincrement().notNull(),
    levelLabel: text("level_label").notNull(),
    levelPoint: int("level_point").notNull(),
    image: text("image").notNull(),
    description: text("description").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      levelId: primaryKey({ columns: [table.id], name: "level_id" }),
    };
  }
);

export const levels = mysqlTable(
  "levels",
  {
    id: int("id").autoincrement().notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    sorting: text("sorting").notNull(),
    imageIcon: text("image_icon").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      levelsId: primaryKey({ columns: [table.id], name: "levels_id" }),
    };
  }
);

export const levelsAchievements = mysqlTable(
  "levels_achievements",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    levelId: int("level_id").notNull(),
    achievements: text("achievements").notNull(),
    currentLevelPoints: int("current_level_points").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      levelsAchievementsId: primaryKey({
        columns: [table.id],
        name: "levels_achievements_id",
      }),
    };
  }
);

export const likeDealsInRow = mysqlTable(
  "like_deals_in_row",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    retailerId: int("retailer_id").notNull(),
    visit: int("visit").notNull(),
    date: text("date").notNull(),
    datetime: text("datetime").notNull(),
  },
  (table) => {
    return {
      likeDealsInRowId: primaryKey({
        columns: [table.id],
        name: "like_deals_in_row_id",
      }),
    };
  }
);

export const loginToken = mysqlTable(
  "login_token",
  {
    id: int("id").autoincrement().notNull(),
    token: text("token").notNull(),
    expiredToken: int("expired_token").notNull(),
    tokenId: int("token_id").notNull(),
    email: text("email").notNull(),
    date: datetime("date", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      loginTokenId: primaryKey({ columns: [table.id], name: "login_token_id" }),
    };
  }
);

export const menu = mysqlTable(
  "menu",
  {
    idMenu: int("id_menu").autoincrement().notNull(),
    tagId: int("tag_id").notNull(),
    labelMenu: text("label_menu").notNull(),
    urlMenu: text("url_menu").notNull(),
    parentId: int("parent_id").notNull(),
  },
  (table) => {
    return {
      menuIdMenu: primaryKey({ columns: [table.idMenu], name: "menu_id_menu" }),
    };
  }
);

export const newsCopy = mysqlTable(
  "news_copy",
  {
    id: int("id").autoincrement().notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    description: mediumtext("description").notNull(),
    userId: int("user_id").notNull(),
    author: varchar("author", { length: 255 }).notNull(),
    displayOrder: int("display_order").default(0).notNull(),
  },
  (table) => {
    return {
      newsCopyId: primaryKey({ columns: [table.id], name: "news_copy_id" }),
    };
  }
);

export const passwordReset = mysqlTable(
  "password_reset",
  {
    userId: int("user_id").autoincrement().notNull(),
    id: int("id").notNull(),
    email: varchar("email", { length: 225 }).notNull(),
    token: varchar("token", { length: 225 }).notNull(),
  },
  (table) => {
    return {
      passwordResetUserId: primaryKey({
        columns: [table.userId],
        name: "password_reset_user_id",
      }),
    };
  }
);

export const pricerunnerClickHistory = mysqlTable(
  "pricerunner_click_history",
  {
    id: int("id").autoincrement().notNull(),
    uniqueId: text("unique_id").notNull(),
    dealId: int("deal_id").notNull(),
    userId: int("user_id").notNull(),
    username: text("username").notNull(),
    redirectionUrl: text("redirection_url").notNull(),
    clickedFromPageUrl: text("clicked_from_page_url").notNull(),
    ip: text("ip").notNull(),
    dateTime: datetime("date_time", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      pricerunnerClickHistoryId: primaryKey({
        columns: [table.id],
        name: "pricerunner_click_history_id",
      }),
    };
  }
);

export const pricerunnerWidget = mysqlTable(
  "pricerunner_widget",
  {
    id: int("id").autoincrement().notNull(),
    heading: text("heading").notNull(),
    text: text("text").notNull(),
    position: int("position").notNull(),
  },
  (table) => {
    return {
      pricerunnerWidgetId: primaryKey({
        columns: [table.id],
        name: "pricerunner_widget_id",
      }),
    };
  }
);

export const recentSearches = mysqlTable(
  "recent_searches",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    search: text("search").notNull(),
    featured: int("featured").notNull(),
    date: datetime("date", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      recentSearchesId: primaryKey({
        columns: [table.id],
        name: "recent_searches_id",
      }),
    };
  }
);

export const recentSearchesShow = mysqlTable(
  "recent_searches_show",
  {
    id: int("id").autoincrement().notNull(),
    title: text("title").notNull(),
    count: int("count").notNull(),
  },
  (table) => {
    return {
      recentSearchesShowId: primaryKey({
        columns: [table.id],
        name: "recent_searches_show_id",
      }),
    };
  }
);

export const recentSearchesShowTop = mysqlTable(
  "recent_searches_show_top",
  {
    id: int("id").autoincrement().notNull(),
    title: text("title").notNull(),
    count: text("count").notNull(),
  },
  (table) => {
    return {
      recentSearchesShowTopId: primaryKey({
        columns: [table.id],
        name: "recent_searches_show_top_id",
      }),
    };
  }
);

export const replyCommentLike = mysqlTable(
  "reply_comment_like",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    commentId: int("comment_id").notNull(),
    retailerId: int("retailer_id").notNull(),
    likeIp: text("like_ip").notNull(),
    date: datetime("date", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      replyCommentLikeId: primaryKey({
        columns: [table.id],
        name: "reply_comment_like_id",
      }),
    };
  }
);

export const replyLikes = mysqlTable(
  "reply_likes",
  {
    replyLikeId: int("reply_like_id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    replyId: int("reply_id").notNull(),
    commentId: int("comment_id").notNull(),
    retailerId: int("retailer_id").notNull(),
    likeIp: text("like_ip"),
    added: text("added").notNull(),
    clickRef: int("click_ref"),
  },
  (table) => {
    return {
      replyLikesReplyLikeId: primaryKey({
        columns: [table.replyLikeId],
        name: "reply_likes_reply_like_id",
      }),
    };
  }
);

export const reportList = mysqlTable(
  "report_list",
  {
    id: int("id").autoincrement().notNull(),
    dealId: text("deal_id").notNull(),
    reportId: int("report_id").notNull(),
    reportName: text("report_name").notNull(),
    userId: int("user_id").notNull(),
    ip: text("ip").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      reportListId: primaryKey({ columns: [table.id], name: "report_list_id" }),
    };
  }
);

export const siteVisits = mysqlTable(
  "site_visits",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    visit: int("visit").notNull(),
    date: text("date").notNull(),
    datetime: text("datetime").notNull(),
  },
  (table) => {
    return {
      siteVisitsId: primaryKey({ columns: [table.id], name: "site_visits_id" }),
    };
  }
);

export const usersUniqueIpVisits = mysqlTable(
  "users_unique_ip_visits",
  {
    id: int("id").autoincrement(),
    userId: int("user_id").notNull(),
    platform: text("platform"),
    visit: int("visit"),
    ip_address: text("ip_address"),
    visit_date: text("visit_date"),
    datetime: text("datetime").notNull(),
    pageUrl: text("page_urls"),
  },
  (table) => {
    return {
      userUniqueIpVisitsId: primaryKey({
        columns: [table.id],
        name: "users_unique_ip_visits",
      }),
    };
  }
);

export const sliderHomepagePosition = mysqlTable(
  "slider_homepage_position",
  {
    id: int("id").autoincrement().notNull(),
    position: int("position").notNull(),
  },
  (table) => {
    return {
      sliderHomepagePositionId: primaryKey({
        columns: [table.id],
        name: "slider_homepage_position_id",
      }),
    };
  }
);

export const slug = mysqlTable(
  "slug",
  {
    slugId: int("slug_id").autoincrement().notNull(),
    slugTitle: text("slug_title").notNull(),
    slugUrl: text("slug_url").notNull(),
  },
  (table) => {
    return {
      slugSlugId: primaryKey({ columns: [table.slugId], name: "slug_slug_id" }),
    };
  }
);

export const stores = mysqlTable(
  "stores",
  {
    storesId: int("stores_id", { unsigned: true }).autoincrement().notNull(),
    parentId: int("parent_id").default(0).notNull(),
    name: varchar("name", { length: 50 }).default("").notNull(),
    tagLine: mediumtext("tag_line").notNull(),
    multiImage: mediumtext("multi_image").notNull(),
    icon: varchar("icon", { length: 100 }).default("").notNull(),
    img: varchar("img", { length: 100 }).default("").notNull(),
    description: mediumtext("description"),
    categoryUrl: varchar("category_url", { length: 100 }).default("").notNull(),
    metaDescription: varchar("meta_description", { length: 255 })
      .default("")
      .notNull(),
    metaKeywords: varchar("meta_keywords", { length: 255 })
      .default("")
      .notNull(),
    sortOrder: tinyint("sort_order").default(0).notNull(),
    shortDescription: mediumtext("short_description").notNull(),
    address: mediumtext("address").notNull(),
    website: mediumtext("website").notNull(),
    phone: mediumtext("phone").notNull(),
    added: datetime("added", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      name: index("idx_stores_name").on(table.name),
      storesStoresId: primaryKey({
        columns: [table.storesId],
        name: "stores_stores_id",
      }),
    };
  }
);

export const studentinfo = mysqlTable(
  "studentinfo",
  {
    id: int("Id").autoincrement().notNull(),
    name: varchar("Name", { length: 80 }).notNull(),
    roll: int("Roll").notNull(),
    position: int("Position").notNull(),
  },
  (table) => {
    return {
      studentinfoId: primaryKey({
        columns: [table.id],
        name: "studentinfo_Id",
      }),
    };
  }
);

export const tableImages = mysqlTable(
  "table_images",
  {
    id: int("id").autoincrement(),
    orderNumber: int("order_number"),
    userId: int("user_id"),
    images: text("images"),
    thumbnail: text("thumbnail"),
  },
  (table) => {
    return {
      tableImagesId: primaryKey({
        columns: [table.id],
        name: "table_images_id",
      }),
    };
  }
);

export const tagFeedBanners = mysqlTable(
  "tag_feed_banners",
  {
    id: int("id").autoincrement().notNull(),
    showText: text("show_text").notNull(),
    showHeading: text("show_heading").notNull(),
    link: text("link").notNull(),
    desktopBanner: text("desktop_banner").notNull(),
    mobileBanner: text("mobile_banner").notNull(),
    headline: text("headline").notNull(),
    buttonText: text("button_text").notNull(),
    position: int("position").notNull(),
    tagId: int("tag_id").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      tagFeedBannersId: primaryKey({
        columns: [table.id],
        name: "tag_feed_banners_id",
      }),
    };
  }
);

export const tagMultipleImages = mysqlTable(
  "tag_multiple_images",
  {
    id: int("id").autoincrement().notNull(),
    orderNumber: int("order_number").notNull(),
    userId: int("user_id").notNull(),
    images: text("images").notNull(),
    thumbnails: text("thumbnails").notNull(),
  },
  (table) => {
    return {
      tagMultipleImagesId: primaryKey({
        columns: [table.id],
        name: "tag_multiple_images_id",
      }),
    };
  }
);

export const tagSideBarAd = mysqlTable(
  "tag_side_bar_ad",
  {
    id: int("id").autoincrement().notNull(),
    ad: text("ad").notNull(),
    sidebarMobileFeed: text("sidebar_mobile_feed").notNull(),
  },
  (table) => {
    return {
      tagSideBarAdId: primaryKey({
        columns: [table.id],
        name: "tag_side_bar_ad_id",
      }),
    };
  }
);

export const tagToAttribute = mysqlTable(
  "tag_to_attribute",
  {
    id: int("id").autoincrement().notNull(),
    tagId: int("tag_id").notNull(),
    optionLabelId: int("option_label_id").notNull(),
    optionLabel: text("option_label").notNull(),
    value: text("value").notNull(),
    date: datetime("date", { mode: "string" }).notNull(),
  },
  (table) => {
    return {
      tagToAttributeId: primaryKey({
        columns: [table.id],
        name: "tag_to_attribute_id",
      }),
    };
  }
);

export const tags = mysqlTable(
  "tags",
  {
    tagId: int("tag_id", { unsigned: true }).autoincrement().notNull(),
    tagParentId: int("tag_parent_id").notNull(),
    productType: int("product_type").notNull(),
    productInformation: text("product_information").notNull(),
    tagType: int("tag_type").notNull(),
    topSlider: int("top_slider").notNull(),
    bottomSlider: int("bottom_slider").notNull(),
    tagAffLink: text("tag_aff_link").notNull(),
    tagWidget: text("tag_widget").notNull(),
    sideWidget: text("side_widget").notNull(),
    parentId: int("parent_id").default(0).notNull(),
    name: varchar("name", { length: 255 }),
    newName: text("new_name").notNull(),
    slug: mediumtext("slug").notNull(),
    tagIndexUrl: int("index_url").notNull(),
    rabattkoderDealtype: int("rabattkoder_dealtype").notNull(),
    storeDealtype: int("store_dealtype").notNull(),
    brandDealtype: int("brand_dealtype").notNull(),
    categoryDealtype: int("category_dealtype").notNull(),
    eventDealtype: int("event_dealtype").notNull(),
    productDealtype: int("product_dealtype").notNull(),
    newsletter: varchar("newsletter", { length: 20 }).notNull(),
    tagLine: mediumtext("tag_line").notNull(),
    shortDescription: mediumtext("short_description").notNull(),
    address: mediumtext("address").notNull(),
    website: mediumtext("website").notNull(),
    phone: mediumtext("phone").notNull(),
    multiImage: mediumtext("multi_image").notNull(),
    icon: varchar("icon", { length: 100 }).default("").notNull(),
    iconImage: mediumtext("icon_image").notNull(),
    img: varchar("img", { length: 100 }).default("").notNull(),
    description: mediumtext("description"),
    seoEditor: text("seo_editor").notNull(),
    categoryUrl: varchar("category_url", { length: 100 }).default("").notNull(),
    metaDescription: varchar("meta_description", { length: 255 })
      .default("")
      .notNull(),
    metaKeywords: varchar("meta_keywords", { length: 255 })
      .default("")
      .notNull(),
    sortOrder: int("sort_order").notNull(),
    featuredTags: int("featured_tags").notNull(),
    showBanner: int("show_banner").notNull(),
    added: datetime("added", { mode: "string" }).notNull(),
    updateTagDate: datetime("update_tag_date", { mode: "string" }).notNull(),
    totalClicks: int("total_clicks").notNull(),
    totalDeals: int("total_deals").notNull(),
    totalActiveDeals: int("total_active_deals").notNull(),
    hideInMenu: int("hide_in_menu").notNull(),
    showInMainSidebarMenu: int("show_in_main_sidebar_menu").notNull(),
    faq: int("faq").notNull(),
    storeUrl: text("store_url").notNull(),
  },
  (table) => {
    return {
      tagsTagId: primaryKey({ columns: [table.tagId], name: "tags_tag_id" }),
    };
  }
);

export const task = mysqlTable(
  "task",
  {
    id: int("id").autoincrement().notNull(),
    taskLabel: text("task_label").notNull(),
    taskSecondLabel: text("task_second_label").notNull(),
    taskPoint: int("task_point").notNull(),
    taskOrder: int("task_order").notNull(),
    taskRepeated: int("task_repeated").notNull(),
    taskType: text("task_type").notNull(),
    taskCount: int("task_count").notNull(),
    taskIcon: text("task_icon").notNull(),
    description: text("description").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      taskId: primaryKey({ columns: [table.id], name: "task_id" }),
    };
  }
);

export const taskAchieve = mysqlTable(
  "task_achieve",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    taskId: int("task_id").notNull(),
    points: text("points").notNull(),
    totalPointsCompleted: int("total_points_completed").notNull(),
    completedTimes: int("completed_times").notNull(),
    achievement: text("achievement").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      taskAchieveId: primaryKey({
        columns: [table.id],
        name: "task_achieve_id",
      }),
    };
  }
);

export const taskAchieveLogs = mysqlTable(
  "task_achieve_logs",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    taskId: int("task_id").notNull(),
    completedTimes: int("completed_times").notNull(),
    achievement: text("achievement").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      taskAchieveLogId: primaryKey({
        columns: [table.id],
        name: "task_achieve_logs_id",
      }),
    };
  }
);

export const tasks = mysqlTable(
  "tasks",
  {
    id: int("id").autoincrement().notNull(),
    title: text("title").notNull(),
    type: text("type").notNull(),
    description: text("description").notNull(),
    sorting: text("sorting").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      tasksId: primaryKey({ columns: [table.id], name: "tasks_id" }),
    };
  }
);

export const tasksToLevel = mysqlTable(
  "tasks_to_level",
  {
    id: int("id").autoincrement().notNull(),
    levelId: int("level_id").notNull(),
    taskId: int("task_id").notNull(),
    labels: text("labels").notNull(),
    counts: int("counts").notNull(),
    type: text("type").notNull(),
    timeDuration: int("time_duration").notNull(),
  },
  (table) => {
    return {
      tasksToLevelId: primaryKey({
        columns: [table.id],
        name: "tasks_to_level_id",
      }),
    };
  }
);

export const pointsLogs = mysqlTable(
  "points_logs",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    activityPoints: int("activity_points").notNull(),
    totalPoints: int("total_points").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      pointsLogsId: primaryKey({
        columns: [table.id],
        name: "points_logs_id",
      }),
    };
  }
);

export const testingTable = mysqlTable(
  "testing_table",
  {
    id: int("id").autoincrement().notNull(),
    title: text("title").notNull(),
  },
  (table) => {
    return {
      testingTableId: primaryKey({
        columns: [table.id],
        name: "testing_table_id",
      }),
    };
  }
);

export const testingUser = mysqlTable(
  "testing_user",
  {
    userId: int("user_id", { unsigned: true }).autoincrement().notNull(),
    username: varchar("username", { length: 70 }).default("").notNull(),
    usernameUser: mediumtext("username_user").notNull(),
    fbUseremail: varchar("fb_useremail", { length: 100 }).notNull(),
    gUseremail: varchar("g_useremail", { length: 100 }).notNull(),
    password: varchar("password", { length: 32 }).default("").notNull(),
    email: varchar("email", { length: 100 }).default("").notNull(),
    fname: varchar("fname", { length: 32 }).default("").notNull(),
    uniUsername: mediumtext("uni_username").notNull(),
    changeGeneratedUname: int("change_generated_uname").notNull(),
    lname: varchar("lname", { length: 25 }).default("").notNull(),
    gender: varchar("gender", { length: 10 }).default("").notNull(),
    address: varchar("address", { length: 32 }).default("").notNull(),
    address2: varchar("address2", { length: 70 }).default("").notNull(),
    city: varchar("city", { length: 50 }).default("").notNull(),
    state: varchar("state", { length: 50 }).default("").notNull(),
    zip: varchar("zip", { length: 10 }).default("").notNull(),
    country: int("country").default(0).notNull(),
    phone: varchar("phone", { length: 20 }).default("").notNull(),
    paymentMethod: varchar("payment_method", { length: 50 })
      .default("")
      .notNull(),
    regSource: varchar("reg_source", { length: 100 }).default("").notNull(),
    refClicks: int("ref_clicks", { unsigned: true }).default(0).notNull(),
    refId: int("ref_id", { unsigned: true }).default(0).notNull(),
    refBonus: tinyint("ref_bonus").default(0).notNull(),
    newsletter: tinyint("newsletter").default(0).notNull(),
    ip: varchar("ip", { length: 15 }).default("").notNull(),
    status: mysqlEnum("status", ["active", "inactive"])
      .default("active")
      .notNull(),
    authProvider: varchar("auth_provider", { length: 100 })
      .default("")
      .notNull(),
    authUid: varchar("auth_uid", { length: 50 }).default("").notNull(),
    activationKey: varchar("activation_key", { length: 100 })
      .default("")
      .notNull(),
    unsubscribeKey: varchar("unsubscribe_key", { length: 100 })
      .default("")
      .notNull(),
    loginSession: varchar("login_session", { length: 255 })
      .default("")
      .notNull(),
    lastLogin: datetime("last_login", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    loginCount: int("login_count", { unsigned: true }).default(0).notNull(),
    lastIp: varchar("last_ip", { length: 15 }).default("").notNull(),
    created: datetime("created", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
    blockReason: text("block_reason"),
    avatarImage: mediumtext("avatar_image").notNull(),
    pickerColorInput: mediumtext("picker_color_input").notNull(),
    dealsPosted: int("deals_posted").notNull(),
    likedDeals: int("liked_deals").notNull(),
    myDealsLiked: int("my_deals_liked").notNull(),
    clickedOnDeals: int("clicked_on_deals").notNull(),
  },
  (table) => {
    return {
      testingUserUserId: primaryKey({
        columns: [table.userId],
        name: "testing_user_user_id",
      }),
    };
  }
);

export const thumbnailImages = mysqlTable(
  "thumbnail_images",
  {
    id: int("id").autoincrement().notNull(),
    thumbnail: text("thumbnail").notNull(),
    orgThumbnails: text("org_thumbnails").notNull(),
    dealId: int("deal_id").notNull(),
  },
  (table) => {
    return {
      thumbnailImagesId: primaryKey({
        columns: [table.id],
        name: "thumbnail_images_id",
      }),
    };
  }
);

export const usersAchieveLevels = mysqlTable(
  "users_achieve_levels",
  {
    id: int("id").autoincrement().notNull(),
    usersId: int("users_id").notNull(),
    levelsId: int("levels_id").notNull(),
    levels: text("levels").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      usersAchieveLevelsId: primaryKey({
        columns: [table.id],
        name: "users_achieve_levels_id",
      }),
    };
  }
);

export const usersAvatarEmotes = mysqlTable(
  "users_avatar_emotes",
  {
    id: int("id").autoincrement().notNull(),
    image: text("image").notNull(),
    avatarImageType: text("avatar_image_type").notNull(),
    order: int("order").notNull(),
  },
  (table) => {
    return {
      usersAvatarEmotesId: primaryKey({
        columns: [table.id],
        name: "users_avatar_emotes_id",
      }),
    };
  }
);

export const usersLevels = mysqlTable(
  "users_levels",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    pendingLevels: text("pending_levels").notNull(),
    levels: text("levels").notNull(),
    currentLevel: text("current_level").notNull(),
  },
  (table) => {
    return {
      usersLevelsId: primaryKey({
        columns: [table.id],
        name: "users_levels_id",
      }),
    };
  }
);

export const usersLevelsActivityCounting = mysqlTable(
  "users_levels_activity_counting",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    addLikes: int("add_likes").notNull(),
    addComments: int("add_comments").notNull(),
    addDeals: int("add_deals").notNull(),
    addDiscussion: int("add_discussion").notNull(),
    addCommentsDiscussion: int("add_comments_discussion").notNull(),
    addFollow: int("add_follow").notNull(),
    getLikes: int("get_likes").notNull(),
    getComments: int("get_comments").notNull(),
    getCommentsDiscussion: int("get_comments_discussion").notNull(),
    getFollow: int("get_follow").notNull(),
    visitSiteInRow: int("visit_site_in_row").notNull(),
    visitSiteWithoutRow: int("visit_site_without_row").notNull(),
    likeDealInRow: int("like_deal_in_row").notNull(),
    addDealInRow: int("add_deal_in_row").notNull(),
    addDealCommentInARow: int("add_deal_comment_in_a_row").notNull(),
    signup: int("signup").notNull(),
  },
  (table) => {
    return {
      usersLevelsActivityCountingId: primaryKey({
        columns: [table.id],
        name: "users_levels_activity_counting_id",
      }),
    };
  }
);

export const usersFeedbacks = mysqlTable(
  "users_feedbacks",
  {
    id: int("id").autoincrement().notNull(),
    rating: int("rating").notNull(),
    feedback: text("feedback").notNull(),
    improvements: text("improvements").notNull(),
    userId: int("user_id").notNull(),
    date: datetime("date", { mode: "string" })
      .default("0000-00-00 00:00:00")
      .notNull(),
  },
  (table) => {
    return {
      userFeedbacksId: primaryKey({
        columns: [table.id],
        name: "users_feedbacks_id",
      }),
    };
  }
);
export const usersSegments = mysqlTable("users_segments", {
  id: int("id").autoincrement().notNull(),
  segmentTitle: text("segment_title").notNull(),
});

export const usersPushNotifications = mysqlTable(
  "users_push_registrations",
  {
    id: int("id").autoincrement().notNull(),
    userId: int("user_id").notNull(),
    token: text("token").notNull(),
    platform: text("platform").notNull(),
    date: text("date").notNull(),
  },
  (table) => {
    return {
      usersPushNotificationsId: primaryKey({
        columns: [table.id],
        name: "users_push_registrations_id",
      }),
    };
  }
);

// export const achievements = mysqlTable("achievements", {
//   id: int("id").autoincrement().notNull(),
//   group: text("group").notNull(),
//   amount: int("amount").notNull(),
//   points: int("amount").notNull(),
//   name: text("name").notNull(),
//   description: text("description"),
//   image: text("image"),
//   created: datetime("created", { mode: 'string' }),
// },
//   (table) => {
//     return {
//       achievementsId: primaryKey({ columns: [table.id], name: "achievements_id" }),
//     }
//   });

// export const userAchievements = mysqlTable("user_achievements", {
//   id: int("id").autoincrement(),
//   achievementId: int("achievement_id").notNull().references(() => achievements.id).references(() => achievements.id),
//   points: int("points").notNull(),
//   created: datetime("created", { mode: 'string' }).notNull(),
//   userId: int("user_id"),
// },
//   (table) => {
//     return {
//       achievementId: index("achievement_id").on(table.achievementId),
//       userAchievementsId: primaryKey({ columns: [table.id], name: "user_achievements_id" }),
//     }
//   });
