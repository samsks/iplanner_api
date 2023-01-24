function checkUUID({ uuid }: { uuid: any }): true | null {
  let s: any = "" + uuid;

  s = s.match(
    "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
  );
  if (s === null) {
    return null;
  }
  return true;
}

function normalize(textData: string): string {
  textData
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return textData;
}

export { checkUUID, normalize };
