import { collection, addDoc, serverTimestamp, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db, isFirebaseConfigured } from "./config";

const LOCAL_STORAGE_AUDITS_KEY = "superscalex_audits";
const LOCAL_STORAGE_LEADS_KEY = "superscalex_calculator_leads";
const LOCAL_STORAGE_SUBSCRIBERS_KEY = "superscalex_subscribers";

/**
 * Submit a Free Revenue Leak & Architecture Audit request
 */
export async function submitAuditRequest(auditData) {
  const payload = {
    ...auditData,
    createdAt: new Date().toISOString(),
    status: "new_inquiry",
    source: "website_hero_audit_modal",
  };

  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, "audits"), {
        ...payload,
        createdAt: serverTimestamp(),
      });
      return { success: true, id: docRef.id, mode: "live" };
    } catch (err) {
      console.error("Firestore submission error:", err);
      // Fallback to local storage so user data is never lost
      saveLocally(LOCAL_STORAGE_AUDITS_KEY, payload);
      return { success: true, id: "local-" + Date.now(), mode: "fallback", error: err.message };
    }
  } else {
    // Simulated Firestore Latency & Local Persistence
    await new Promise((res) => setTimeout(res, 600));
    const localId = "sim-" + Math.random().toString(36).substring(2, 9);
    saveLocally(LOCAL_STORAGE_AUDITS_KEY, { ...payload, id: localId });
    return { success: true, id: localId, mode: "simulated" };
  }
}

/**
 * Save projected ROI calculation alongside lead contact info
 */
export async function submitCalculatorLead(leadData) {
  const payload = {
    ...leadData,
    createdAt: new Date().toISOString(),
    type: "roi_calculator_capture",
  };

  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, "calculator_leads"), {
        ...payload,
        createdAt: serverTimestamp(),
      });
      return { success: true, id: docRef.id, mode: "live" };
    } catch (err) {
      console.error("Firestore calculator lead error:", err);
      saveLocally(LOCAL_STORAGE_LEADS_KEY, payload);
      return { success: true, id: "local-" + Date.now(), mode: "fallback" };
    }
  } else {
    await new Promise((res) => setTimeout(res, 500));
    const localId = "lead-" + Date.now();
    saveLocally(LOCAL_STORAGE_LEADS_KEY, { ...payload, id: localId });
    return { success: true, id: localId, mode: "simulated" };
  }
}

/**
 * Capture email for the 8-Figure Scale Blueprint & AI Stack
 */
export async function subscribeNewsletter(email, source = "blueprint_download") {
  const payload = {
    email: email.trim().toLowerCase(),
    source,
    createdAt: new Date().toISOString(),
  };

  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, "subscribers"), {
        ...payload,
        createdAt: serverTimestamp(),
      });
      return { success: true, id: docRef.id, mode: "live" };
    } catch (err) {
      console.error("Firestore subscriber error:", err);
      saveLocally(LOCAL_STORAGE_SUBSCRIBERS_KEY, payload);
      return { success: true, id: "local-" + Date.now(), mode: "fallback" };
    }
  } else {
    await new Promise((res) => setTimeout(res, 400));
    saveLocally(LOCAL_STORAGE_SUBSCRIBERS_KEY, payload);
    return { success: true, id: "sub-" + Date.now(), mode: "simulated" };
  }
}

/**
 * Helper to store backups in localStorage
 */
function saveLocally(key, item) {
  try {
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    existing.unshift(item);
    localStorage.setItem(key, JSON.stringify(existing.slice(0, 50)));
  } catch (e) {
    console.warn("Local storage save error:", e);
  }
}

export function getLocalAudits() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUDITS_KEY) || "[]");
  } catch {
    return [];
  }
}
