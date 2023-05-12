"""RestAPI enpoint @banner GET"""
import os

from plone import api
from plone.restapi.services import Service
from zope.component.hooks import getSite
from zope.interface import implementer
from zope.publisher.interfaces import IPublishTraverse

from cybroplone.sitestatus.interfaces import ISiteStatusSettingSchema, \
    ISiteStatusLayer


def isTrue(value):
    """Evaluate True"""
    if isinstance(value, str):
        return value.lower() in ("true", "1", "t", "on", "yes", "y")
    if isinstance(value, bool):
        return value
    return False


@implementer(IPublishTraverse)
class SiteStatusGet(Service):
    """Banner GET"""

    def reply(self):
        """
        Get the status banner information.

        Returns:
            A dictionary containing the status banner information.
        """

        # Check if the request is from the Site Status layer:
        if not ISiteStatusLayer.providedBy(self.request):
            return {"status_banner": {"enabled": False}}

        # Get the status banner enabled setting:
        status_banner_enabled = api.portal.get_registry_record(
            "status_banner_enabled",
            interface=ISiteStatusSettingSchema,
            default=False,
        )

        # Return a dictionary containing the status banner information:
        return {"status_banner": {
            "enabled": status_banner_enabled,
            "type": api.portal.get_registry_record(
                "status_banner_type",
                interface=ISiteStatusSettingSchema,
                default=""
            ),
            "title": api.portal.get_registry_record(
                "status_banner_title",
                interface=ISiteStatusSettingSchema,
                default="",
            ),
            "message": api.portal.get_registry_record(
                "status_banner_message",
                interface=ISiteStatusSettingSchema,
                default="",
            ),
            "NodeSelector": '.skiplinks-wrapper',

        }
        }

