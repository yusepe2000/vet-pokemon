// Un campo de formulario: etiqueta + input + mensaje de error
function FormField({ htmlFor, label, error, hint, children }) {
  return (
    <div className="mb-2">
      <label htmlFor={htmlFor} className="form-label text-white">
        {label}
      </label>

      {children}

      {/* la ayuda solo se ve si no hay error */}
      {hint && !error && <div className="form-text text-white">{hint}</div>}

      {/* el error solo se ve si existe */}
      {error && (
        <div className="invalid-feedback d-block text-white fw-semibold" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export default FormField;
