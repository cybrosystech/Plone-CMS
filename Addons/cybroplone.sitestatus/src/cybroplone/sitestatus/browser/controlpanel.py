"""Control panel module"""
from plone.app.registry.browser.controlpanel import ControlPanelFormWrapper
from plone.app.registry.browser.controlpanel import RegistryEditForm

from cybroplone.sitestatus.interfaces import ISiteStatusSettingSchema


class SiteStatusRegistryEditForm(RegistryEditForm):
    """Site Status Registry Edit Form"""
    schema = ISiteStatusSettingSchema
    id = "site-status"
    label = "Site Status"


class SiteStatusControlPanelFormWrapper(ControlPanelFormWrapper):
    """Banner Control Panel Form Wrapper"""
    form = SiteStatusRegistryEditForm
