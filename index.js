module.exports = function (source, map, meta) {
  const exported = JSON.stringify({
    ...meta.attributes,
    content: meta.html,
  });
  return `module.exports=${exported}`;
};
