export default function checkString(string: String) {
    if (string.includes("&#x27;")) return string.replaceAll("&#x27;", "'");
    if (string.includes("'")) return string.replaceAll("'", "&apos;");
    console.log(string);
    return string;
}