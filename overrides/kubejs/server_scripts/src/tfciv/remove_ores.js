WorldgenEvents.remove(event => {

  const TFC_ORES = [
    'tfc:vein/surface_native_silver',
    'tfc:vein/rich_native_gold',
    'tfc:vein/normal_native_gold',
    'tfc:vein/normal_bismuthinite',
    'tfc:vein/surface_limonite',
    'tfc:vein/surface_bismuthinite',
    'tfc:vein/surface_tetrahedrite',
    'tfc:vein/surface_native_copper',
    'tfc:vein/normal_tetrahedrite',
    'tfc:vein/surface_malachite',
    'tfc:vein/normal_malachite',
    'tfc:vein/surface_magnetite',
    'tfc:vein/normal_garnierite',
    'tfc:vein/sylvite',
    'tfc:vein/surface_cassiterite',
    'tfc:vein/fake_native_gold',
    'tfc:vein/saltpeter',
    'tfc:vein/normal_sphalerite',
    'tfc:vein/gabbro_garnierite',
    'tfc:vein/surface_sphalerite',
    'tfc:vein/cryolite',
    'tfc:vein/cinnabar',
    'tfc:vein/surface_hematite',
    'tfc:vein/sulfur',
    'tfc:vein/normal_native_silver',
    'firmalife:vein/deep_chromite',
    'firmalife:vein/normal_chromite',
    'tfc_ie_addon:vein/normal_bauxite',
    'tfc_ie_addon:vein/normal_galena',
    'tfc_ie_addon:vein/surface_bauxite',
    'tfc_ie_addon:vein/surface_galena',
    'tfc_ie_addon:vein/normal_uraninite'
  ]

  TFC_ORES.forEach(id => {
    event.removeFeatureById('underground_ores', id)
  })
});