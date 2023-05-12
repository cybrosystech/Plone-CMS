"""Site Status Controlpanel API"""
from zope.interface import Interface
from zope.component import adapter
from plone.restapi.controlpanels import RegistryConfigletPanel
from cybroplone.sitestatus.interfaces import ISiteStatusSettingSchema,ISiteStatusLayer


@adapter(Interface, ISiteStatusLayer)
class SiteStatusControlpanel(RegistryConfigletPanel):
    """Site Status Control Panel"""
    schema = ISiteStatusSettingSchema
    schema_prefix = None
    configlet_id = "site-status"
    configlet_category_id = "Products"
    title = "Site Status Settings"
    group = "Products"

