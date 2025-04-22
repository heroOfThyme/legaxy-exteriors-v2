import { Icon } from 'astro-icon/components';

// This component renders a custom-styled Google Static Maps image
export const GoogleStaticMap = ({
  apiKey,
  center = "Windsor,ON",
  zoom = 11,
  width = 600,
  height = 400,
  markerLocations = [],
  mapType = "roadmap",
  style = "custom", // "default" or "custom"
  className = ""
}) => {
  // Base URL for Google Static Maps API
  const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";
  
  // Default marker for main location (Windsor)
  const defaultMarker = `color:green|label:L|${center}`;
  const markers = markerLocations.length > 0 
    ? markerLocations.map(loc => `&markers=color:red|${loc}`).join('')
    : `&markers=${defaultMarker}`;
  
  // Custom map styling - a subtle, green-themed style appropriate for a landscaping company
  // Note: For static maps, style parameter is different than the JavaScript API
  // We use styling parameters with simplified options
  const customMapStyle = [
    "feature:landscape|element:geometry|color:0xf9f9f9",
    "feature:landscape.natural|color:0xf0f6e8",
    "feature:poi.park|color:0xc8e6c9",
    "feature:water|element:geometry|color:0xb3e0ff",
    "feature:road|element:geometry|color:0xffffff",
    "feature:road.arterial|element:geometry|color:0xe0e0e0",
    "feature:road.highway|element:geometry|color:0xdadada",
    "feature:all|element:labels.text.fill|color:0x757575",
    "feature:poi|element:geometry|color:0xe0f2e0"
  ];
  
  // Convert map style to required format for static maps API
  const styleParam = style === "custom" 
    ? customMapStyle.map(style => `&style=${encodeURIComponent(style)}`).join('') 
    : '';
  
  // Construct the final URL
  const mapUrl = `${baseUrl}?center=${encodeURIComponent(center)}&zoom=${zoom}&size=${width}x${height}&maptype=${mapType}${markers}&key=${apiKey}${styleParam}`;
  
  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      {/* Static Map Image */}
      <img 
        src={mapUrl} 
        alt={`Map of ${center}`} 
        className="w-full h-full object-cover"
        width={width}
        height={height}
      />
      
      {/* Company branding overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 p-3 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Icon name="tabler:map-pin" className="w-5 h-5 text-primary mr-2" />
            <span className="font-medium text-gray-900 dark:text-white">Legacy Exteriors</span>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300">Windsor-Essex County</span>
        </div>
      </div>
      
      {/* Map Decorative Elements */}
      <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow">
        <Icon name="tabler:compass" className="w-6 h-6 text-primary" />
      </div>
    </div>
  );
};

// This is a fallback component that displays a custom SVG map when no API key is available
export const StaticMapFallback = ({
  width = 600,
  height = 400,
  className = ""
}) => {
  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      {/* Custom SVG Map */}
      <svg viewBox="0 0 500 400" className="w-full h-full bg-gray-100 dark:bg-gray-800">
        {/* Background texture */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(100,100,100,0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Water bodies */}
        <path 
          d="M0,300 L500,300 L500,400 L0,400 Z" 
          className="fill-blue-200 dark:fill-blue-900/30" 
        />
        <text x="250" y="390" textAnchor="middle" className="text-sm fill-blue-800 dark:fill-blue-400 font-medium">Lake Erie</text>
        
        <path 
          d="M0,0 L0,300 L50,300 L50,0 Z" 
          className="fill-blue-200 dark:fill-blue-900/30" 
        />
        <text x="25" y="150" textAnchor="middle" transform="rotate(-90 25,150)" className="text-sm fill-blue-800 dark:fill-blue-400 font-medium">Detroit River</text>
        
        <path 
          d="M0,0 L500,0 L500,50 L0,50 Z" 
          className="fill-blue-200 dark:fill-blue-900/30" 
        />
        <text x="250" y="25" textAnchor="middle" className="text-sm fill-blue-800 dark:fill-blue-400 font-medium">Lake St. Clair</text>
        
        {/* Essex County outline (simplified) */}
        <path 
          d="M50,50 L450,50 L450,300 L50,300 Z" 
          className="fill-green-50 dark:fill-green-900/10 stroke-gray-400 dark:stroke-gray-600" 
          strokeWidth="2"
          fillOpacity="0.7"
        />
        
        {/* Windsor service area */}
        <path 
          d="M100,175 L275,175 A50,50 0 0,1 275,275 L100,275 Z" 
          className="fill-primary/30 stroke-primary" 
          strokeWidth="2"
          fillOpacity="0.8"
        />
        
        {/* City markers */}
        {/* Windsor */}
        <circle cx="170" cy="230" r="10" className="fill-primary" />
        <text x="170" y="265" textAnchor="middle" className="text-sm font-bold fill-gray-900 dark:fill-white">Windsor</text>
        
        {/* Tecumseh */}
        <circle cx="290" cy="175" r="6" className="fill-primary/70" />
        <text x="290" y="160" textAnchor="middle" className="text-sm fill-gray-800 dark:fill-white">Tecumseh</text>
        
        {/* LaSalle */}
        <circle cx="100" cy="200" r="6" className="fill-primary/70" />
        <text x="100" y="185" textAnchor="middle" className="text-sm fill-gray-800 dark:fill-white">LaSalle</text>
        
        {/* Amherstburg */}
        <circle cx="75" cy="250" r="6" className="fill-primary/70" />
        <text x="75" y="235" textAnchor="middle" className="text-sm fill-gray-800 dark:fill-white">Amherstburg</text>
        
        {/* Lakeshore */}
        <circle cx="380" cy="130" r="6" className="fill-primary/70" />
        <text x="380" y="115" textAnchor="middle" className="text-sm fill-gray-800 dark:fill-white">Lakeshore</text>
        
        {/* Leamington */}
        <circle cx="380" cy="250" r="6" className="fill-primary/70" />
        <text x="380" y="235" textAnchor="middle" className="text-sm fill-gray-800 dark:fill-white">Leamington</text>
        
        {/* Main Office Location */}
        <g transform="translate(170,230)">
          <circle r="12" className="fill-primary" />
          <text y="5" textAnchor="middle" className="text-xs fill-white font-bold">LE</text>
        </g>
        
        {/* Compass */}
        <g transform="translate(420, 80)">
          <circle cx="0" cy="0" r="15" className="fill-gray-200 dark:fill-gray-700 stroke-gray-400 dark:stroke-gray-600" strokeWidth="1" />
          <path d="M0,-12 L0,12 M-12,0 L12,0" stroke="currentColor" strokeWidth="1" className="stroke-gray-500 dark:stroke-gray-400" />
          <text x="0" y="-16" textAnchor="middle" className="text-xs fill-gray-600 dark:fill-gray-300">N</text>
        </g>
        
        {/* Legend */}
        <g transform="translate(75, 80)">
          <rect x="0" y="0" width="120" height="60" rx="4" className="fill-white dark:fill-gray-800 opacity-80" />
          <text x="60" y="15" textAnchor="middle" className="text-xs font-medium fill-gray-900 dark:fill-white">Service Area Legend</text>
          <circle cx="15" cy="30" r="5" className="fill-primary" />
          <text x="25" y="33" className="text-xs fill-gray-900 dark:fill-white">Main Service Area</text>
          <circle cx="15" cy="45" r="3" className="fill-primary/70" />
          <text x="25" y="48" className="text-xs fill-gray-900 dark:fill-white">Surrounding Areas</text>
        </g>
      </svg>
      
      {/* Company Branding Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 p-3 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Icon name="tabler:map-pin" className="w-5 h-5 text-primary mr-2" />
            <span className="font-medium text-gray-900 dark:text-white">Legacy Exteriors</span>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300">Windsor-Essex County</span>
        </div>
      </div>
    </div>
  );
};