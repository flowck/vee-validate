const messages = {
    after: (field, [target]) => `${field} doit être postérieur à ${target}.`,
    alpha_dash: (field) => `${field} ne peut contenir que des caractères alpha-numériques, tirets ou soulignés.`,
    alpha_num: (field) => `${field} ne peut contenir que des caractères alpha-numériques.`,
    alpha: (field) => `${field} ne peut contenir que des lettres.`,
    before: (field, [target]) => `${field} doit être antérieur à ${target}.`,
    between: (field, [min, max]) => `${field} doit être compris entre ${min} et ${max}.`,
    confirmed: (field, [confirmedField]) => `${field} ne correspond pas à ${confirmedField}.`,
    date_between: (field, [min, max]) => `${field} doit être situé entre ${min} et ${max}.`,
    date_format: (field, [format]) => `${field} doit être au format ${format}.`,
    decimal: (field, [decimals] = ['*']) => `${field} doit être un nombre et peut contenir ${decimals === '*' ? '' : decimals} décimales.`,
    digits: (field, [length]) => `${field} doit être un nombre entier de ${length} chiffres.`,
    dimensions: (field, [width, height]) => `${field} doit avoir une taille de ${width} pixels par ${height} pixels.`,
    email: (field) => `${field} doit être une adresse e-mail valide.`,
    ext: (field) => `${field} doit être un fichier valide.`,
    image: (field) => `${field} doit être une image.`,
    in: (field) => `${field} doit être une valeur valide.`,
    ip: (field) => `${field} doit être une adresse IP.`,
    max: (field, [length]) => `${field} ne peut pas contenir plus de ${length} caractères.`,
    mimes: (field) => `${field} doit avoir un type MIME valide.`,
    min: (field, [length]) => `${field} doit contenir au minimum ${length} caractères.`,
    not_in: (field) => `${field} doit être une valeur valide.`,
    numeric: (field) => `${field} ne peut contenir que des chiffres.`,
    regex: (field) => `${field} est invalide.`,
    required: (field) => `${field} est obligatoire.`,
    size: (field, [size]) => `${field} doit avoir un poids inférieur ${size} KB.`,
    url: (field) => `${field} n'est pas une URL valide.`
};

const locale = {
    name: 'fr',
    messages,
    attributes: {}
};

if (typeof VeeValidate !== 'undefined' && VeeValidate && typeof VeeValidate.Validator) {
    VeeValidate.Validator.addLocale(locale);
}

export default locale;