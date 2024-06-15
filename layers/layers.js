ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4283").setExtent([144.868193, -37.782909, 145.073098, -37.689174]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LocalR2values_1 = new ol.format.GeoJSON();
var features_LocalR2values_1 = format_LocalR2values_1.readFeatures(json_LocalR2values_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4283'});
var jsonSource_LocalR2values_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalR2values_1.addFeatures(features_LocalR2values_1);
var lyr_LocalR2values_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalR2values_1, 
                style: style_LocalR2values_1,
                popuplayertitle: "Local R2 values",
                interactive: true,
    title: 'Local R2 values<br />\
    <img src="styles/legend/LocalR2values_1_0.png" /> -0.03 - 0.217<br />\
    <img src="styles/legend/LocalR2values_1_1.png" /> 0.217 - 0.295<br />\
    <img src="styles/legend/LocalR2values_1_2.png" /> 0.295 - 0.374<br />\
    <img src="styles/legend/LocalR2values_1_3.png" /> 0.374 - 0.464<br />\
    <img src="styles/legend/LocalR2values_1_4.png" /> 0.464 - 0.747<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_LocalR2values_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LocalR2values_1];
lyr_LocalR2values_1.set('fieldAliases', {'source_id': 'source_id', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 's_zonalst_': 's_zonalst_', 's_meshbloc': 's_meshbloc', 's_meshbl_1': 's_meshbl_1', 's_meshbl_2': 's_meshbl_2', 's_c_intrcp': 's_c_intrcp', 's_se_intrc': 's_se_intrc', 's_t_intrcp': 's_t_intrcp', 's_sg_intrc': 's_sg_intrc', 's_c_meshbl': 'Percent_Vegetation_Coefficient', 's_se_meshb': 's_se_meshb', 's_t_meshbl': 's_t_meshbl', 's_sg_meshb': 's_sg_meshb', 's_c_mesh_1': 'Percent_BuildingFootprint_Coefficient', 's_se_mes_1': 's_se_mes_1', 's_t_mesh_1': 's_t_mesh_1', 's_sg_mes_1': 's_sg_mes_1', 's_c_mesh_2': 'Percent_Pavements_Coefficient', 's_se_mes_2': 's_se_mes_2', 's_t_mesh_2': 's_t_mesh_2', 's_sg_mes_2': 's_sg_mes_2', 's_predict': 's_predict', 'predicted': 'predicted', 'c_intrcpt': 'c_intrcpt', 'c_meshbloc': 'c_meshbloc', 'c_meshbl_1': 'c_meshbl_1', 'c_meshbl_2': 'c_meshbl_2', 's_residual': 's_residual', 's_stdresid': 's_stdresid', 'influence': 'influence', 'cooks_d': 'cooks_d', 'localr2': 'localr2', 'cnd_number': 'cnd_number', });
lyr_LocalR2values_1.set('fieldImages', {'source_id': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 's_zonalst_': 'TextEdit', 's_meshbloc': 'TextEdit', 's_meshbl_1': 'TextEdit', 's_meshbl_2': 'TextEdit', 's_c_intrcp': 'TextEdit', 's_se_intrc': 'TextEdit', 's_t_intrcp': 'TextEdit', 's_sg_intrc': 'Range', 's_c_meshbl': 'TextEdit', 's_se_meshb': 'TextEdit', 's_t_meshbl': 'TextEdit', 's_sg_meshb': 'Range', 's_c_mesh_1': 'TextEdit', 's_se_mes_1': 'TextEdit', 's_t_mesh_1': 'TextEdit', 's_sg_mes_1': 'Range', 's_c_mesh_2': 'TextEdit', 's_se_mes_2': 'TextEdit', 's_t_mesh_2': 'TextEdit', 's_sg_mes_2': 'Range', 's_predict': 'TextEdit', 'predicted': 'TextEdit', 'c_intrcpt': 'TextEdit', 'c_meshbloc': 'TextEdit', 'c_meshbl_1': 'TextEdit', 'c_meshbl_2': 'TextEdit', 's_residual': 'TextEdit', 's_stdresid': 'TextEdit', 'influence': 'TextEdit', 'cooks_d': 'TextEdit', 'localr2': 'TextEdit', 'cnd_number': 'TextEdit', });
lyr_LocalR2values_1.set('fieldLabels', {'source_id': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 's_zonalst_': 'no label', 's_meshbloc': 'no label', 's_meshbl_1': 'no label', 's_meshbl_2': 'no label', 's_c_intrcp': 'no label', 's_se_intrc': 'no label', 's_t_intrcp': 'no label', 's_sg_intrc': 'no label', 's_c_meshbl': 'inline label - visible with data', 's_se_meshb': 'no label', 's_t_meshbl': 'no label', 's_sg_meshb': 'no label', 's_c_mesh_1': 'inline label - visible with data', 's_se_mes_1': 'no label', 's_t_mesh_1': 'no label', 's_sg_mes_1': 'no label', 's_c_mesh_2': 'inline label - visible with data', 's_se_mes_2': 'no label', 's_t_mesh_2': 'no label', 's_sg_mes_2': 'no label', 's_predict': 'no label', 'predicted': 'no label', 'c_intrcpt': 'no label', 'c_meshbloc': 'no label', 'c_meshbl_1': 'no label', 'c_meshbl_2': 'no label', 's_residual': 'no label', 's_stdresid': 'no label', 'influence': 'no label', 'cooks_d': 'no label', 'localr2': 'no label', 'cnd_number': 'no label', });
lyr_LocalR2values_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});