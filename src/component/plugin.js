const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('../asset/', false, /\.svg$/);
requireAll(req);
