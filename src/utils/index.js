import { ROWS_PER_PAGE } from "../config";

/**
 * Formats large numbers with k,m,b
 * @param {Number} n
 * @returns
 */
export const formatCash = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "k";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "m";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "b";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};

/**
 * Truncates text with ellipsis
 * @param {String} text
 * @param {Number} maxLength
 * @returns
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`;
  }
  return text;
};

/**
 * Gives social platform url based on platform and handle
 * @param {*} platform
 * @param {*} handle
 * @returns
 */
export const getSocialURL = (platform, handle) => {
  switch (platform) {
    case "instagram":
      return `https://www.instagram.com/${handle}`;
    case "twitter":
      return `https://twitter.com/${handle}`;
    default:
      return `https://www.${platform}.com/${handle}`;
  }
};

/**
 * When called scrolls smooth to the top of the page.
 * globLastC prevents shaky animations when scrolling to
 * bottom while topscrolling.
 */
let globLastC = Infinity;

function smoothScrollTopRec() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0 && globLastC > c) {
    globLastC = c;
    window.requestAnimationFrame(smoothScrollTopRec);
    window.scrollTo(0, c - c / 8);
  } else {
    globLastC = Infinity;
  }
}

export function smoothScrollTop() {
  /**
   * Normally this gets called from componentDidMount()
   * Not waiting a tiny fraction of time can lead
   * to shaky behaviour
   */
  setTimeout(() => {
    smoothScrollTopRec();
  }, 10);
}

export function unixToDateString(unix) {
  const date = new Date(unix * 1000);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export function currencyPrettyPrint(curr) {
  return curr ?? "";
}

export function getShortName(input = "") {
  const name = input.toUpperCase();
  if (name.length > 0) {
    const splits = name.split(" ");
    if (splits.length > 1) {
      return splits[0].trim()[0] + splits.pop().trim()[0];
    } else {
      return splits[0].trim()[0];
    }
  }
  return name;
}

export function isAdmin(role) {
  return role === "admin";
}

export function isInfluencer(role) {
  return role === "influencer";
}

export function isArtist(role) {
  return role === "artist";
}

export function toQueryParams(paramsObj) {
  var output = "";
  if (typeof paramsObj === "object") {
    for (var key in paramsObj) {
      const value = paramsObj[key];
      if (Array.isArray(value)) {
        output += value.map((v) => `${key}=${v}`).join("&") + "&";
      } else {
        output += `${key}=${value}&`;
      }
    }
  }
  return output;
}

export function isUrlValid(input) {
  var res = input.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  if (res == null) return false;
  else return true;
}

export function setTitle(title) {
  let prefix = "";
  if (typeof title === "string" && title.trim().length > 0) {
    prefix = `${title} | `;
  }
  document.title = `${prefix}Minted`;
}

export function mergeData(state, payload) {
  if (payload.page > state.page) {
    return [...state.data, ...payload.data];
  } else {
    return payload.data;
  }
}

export function toReadableDate(dateStr) {
  return new Date(dateStr).toDateString();
}

export function updateData(state, id, newDataOrDelete) {
  const { data = [], total } = state;
  if (!id && newDataOrDelete) {
    // Create
    return {
      data: [newDataOrDelete, ...data],
      total: total + 1,
    };
  }
  const index = data.findIndex((o) => o.id === id);
  if (index > -1) {
    if (typeof newDataOrDelete === "object") {
      // Update
      return {
        data: [
          ...data.slice(0, index),
          { ...data[index], ...newDataOrDelete },
          ...data.slice(index + 1),
        ],
      };
    } else {
      // Delete
      const newTotal = total - 1;
      return {
        data: [...data.slice(0, index), ...data.slice(index + 1)],
        total: newTotal,
        page: newTotal % ROWS_PER_PAGE,
      };
    }
  }
  return { data };
}

export function scrollTo(offsetTop) {
  window.scrollTo({
    top: offsetTop,
    left: 0,
    behavior: "smooth",
  });
}

export function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
