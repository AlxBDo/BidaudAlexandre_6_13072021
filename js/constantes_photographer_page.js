// media type of displayed element
export const CURRENT_MEDIA_TYPE = document.title !== "Fisheye" ? document.getElementById("current-element-type") : "";

// media container
export const GALLERY =  document.title !== "Fisheye" ? document.getElementById("gallery") : "";

// medias (pictures and videos)
export const GALLERY_MEDIA_ELEMENTS = document.querySelectorAll("a.media");

export const LIKE_SUM = document.title !== "Fisheye" ? document.getElementById("like-total"): "" ;

// Contact form modal classlist
export const MODAL_CF_CLASSLIST = document.title !== "Fisheye" ? document.getElementById("contact-form-modal").classList : "";

export const ORDERBY_CONTAINER_CLASSLIST = document.title !== "Fisheye" ? document.getElementById("order-by-container").classList : "";

export const PHOTO_SUM = document.title !== "Fisheye" ? document.getElementById("photo-sum") : "";

export const VIDEO_SUM = document.title !== "Fisheye" ? document.getElementById("video-sum") : "";