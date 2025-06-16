// URL-Normalisierung für benutzerfreundliche Eingabe
export function normalizeUrl(userInput: string): string {
  let url = userInput.trim();
  
  // Entferne Leerzeichen
  url = url.replace(/\s+/g, '');
  
  // Füge https:// hinzu, wenn kein Protokoll vorhanden
  if (!url.match(/^https?:\/\//)) {
    url = 'https://' + url;
  }
  
  // Füge www. hinzu, wenn nicht vorhanden (außer bei localhost oder IP-Adressen)
  if (!url.includes('www.') && !url.includes('localhost') && !url.match(/\d+\.\d+\.\d+\.\d+/)) {
    url = url.replace(/^(https?:\/\/)/, '$1www.');
  }
  
  // Entferne trailing slash
  url = url.replace(/\/$/, '');
  
  return url;
}

// Validiert ob URL-Format gültig ist
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}